import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDUzZDYyNjQ2N2VmMDdiZDEwZTU5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMTYyMDA2NywiZXhwIjoxNzExODc5MjY3fQ.-apJ-fOw8qDzgJ_V0XVzgFN_jX6luHqk7Idc9QCC2Nw"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
}); 