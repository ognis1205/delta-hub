# Copyright 2024 Shingo OKAWA and a number of other contributors. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Defines the FastAPI-backed Delta Sharing server implementation.

This allows using Delta Hub with third-party ASGI/WSGI implementations without modifying their code.
"""


from fastapi import FastAPI

api = FastAPI()


@api.get("/")
async def root():
    """Placeholder

    This will be removed once the actual development will start.
    """
    return {"Say": "Hello!"}
