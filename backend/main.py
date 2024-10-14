from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Allow CORS for all origins, methods, and headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (adjust for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (POST, GET, etc.)
    allow_headers=["*"],  # Allows all headers (Content-Type, Authorization, etc.)
)

class Pipeline(BaseModel):
    nodes: List[str]
    edges: List[Dict[str, str]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    def is_dag(edges):
        from collections import defaultdict, deque
        
        graph = defaultdict(list)
        in_degree = defaultdict(int)
        
        for edge in edges:
            graph[edge['from']].append(edge['to'])
            in_degree[edge['to']] += 1
            if edge['from'] not in in_degree:
                in_degree[edge['from']] = 0
        
        queue = deque([node for node in in_degree if in_degree[node] == 0])
        visited = 0
        
        while queue:
            node = queue.popleft()
            visited += 1
            for neighbor in graph[node]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)

        return visited == len(in_degree)

    is_dag_result = is_dag(pipeline.edges)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag_result}