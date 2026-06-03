import { stringify } from "query-string";
import type {
  CreateParams,
  DataProvider,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  RaRecord,
  UpdateManyParams,
  UpdateParams,
} from "react-admin";
import { fetchUtils } from "react-admin";

const fetchJson = fetchUtils.fetchJson;

const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;

const dataProvider: DataProvider = {
  getList: async (resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination || {};
    const { field, order } = params.sort || {};
    const sortField = order === "DESC" && field ? `-${field}` : field;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      _sort: sortField,
      _page: page,
      _per_page: perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await fetchJson(url, { signal: params?.signal });
    return { data: json.data, total: json.items };
  },

  getOne: async (resource: string, params: GetOneParams<RaRecord>) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await fetchJson(url, { signal: params?.signal });
    return { data: json };
  },

  getMany: async (resource: string, params: GetManyParams<RaRecord>) => {
    const query = { id: params.ids };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await fetchJson(url, { signal: params?.signal });
    return { data: json };
  },

  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams,
  ) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const sortField = order === "DESC" && field ? `-${field}` : field;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      [params.target]: params.id,
      _sort: sortField,
      _page: page,
      _per_page: perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await fetchJson(url, { signal: params?.signal });
    return { data: json.data, total: json.items };
  },

  update: async (resource: string, params: UpdateParams<RaRecord>) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await fetchJson(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  updateMany: async (resource: string, params: UpdateManyParams) => {
    const responses = await Promise.all(
      params.ids.map((id: string | number) =>
        fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        }),
      ),
    );
    return { data: responses.map(({ json }) => json.id) };
  },

  create: async (resource: string, params: CreateParams) => {
    const url = `${apiUrl}/${resource}`;
    const { json } = await fetchJson(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: { ...params.data, ...json } };
  },

  delete: async (resource: string, params: DeleteParams<RaRecord>) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await fetchJson(url, { method: "DELETE" });
    return { data: json };
  },

  deleteMany: async (resource: string, params: DeleteManyParams<RaRecord>) => {
    const responses = await Promise.all(
      params.ids.map((id: string | number) =>
        fetchJson(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
        }),
      ),
    );
    return { data: responses.map(({ json }) => json.id) };
  },
};

export default dataProvider;
