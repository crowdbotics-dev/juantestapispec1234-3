import axios from "axios"
const juantestapispecAPI = axios.create({
  baseURL: "https://juantestapispec1234-3.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_rojo_list(payload) {
  return juantestapispecAPI.get(`/api/v1/rojo/`)
}
function api_v1_rojo_create(payload) {
  return juantestapispecAPI.post(`/api/v1/rojo/`, payload.data)
}
function api_v1_login_create(payload) {
  return juantestapispecAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_newmo_list(payload) {
  return juantestapispecAPI.get(`/api/v1/newmo/`)
}
function api_v1_newmo_create(payload) {
  return juantestapispecAPI.post(`/api/v1/newmo/`, payload.data)
}
function api_v1_signup_create(payload) {
  return juantestapispecAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juantestapispecAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juantestapispecAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juantestapispecAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return juantestapispecAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return juantestapispecAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_rojo_retrieve(payload) {
  return juantestapispecAPI.get(`/api/v1/rojo/${payload.id}/`)
}
function api_v1_rojo_update(payload) {
  return juantestapispecAPI.put(`/api/v1/rojo/${payload.id}/`, payload.data)
}
function api_v1_rojo_partial_update(payload) {
  return juantestapispecAPI.patch(`/api/v1/rojo/${payload.id}/`, payload.data)
}
function api_v1_rojo_destroy(payload) {
  return juantestapispecAPI.delete(`/api/v1/rojo/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return juantestapispecAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juantestapispecAPI.post(`/rest-auth/logout/`)
}
function api_v1_newmo_retrieve(payload) {
  return juantestapispecAPI.get(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_newmo_update(payload) {
  return juantestapispecAPI.put(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_partial_update(payload) {
  return juantestapispecAPI.patch(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_destroy(payload) {
  return juantestapispecAPI.delete(`/api/v1/newmo/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return juantestapispecAPI.post(`/rest-auth/registration/`, payload.data)
}
function modules_articles_article_list(payload) {
  return juantestapispecAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return juantestapispecAPI.post(`/modules/articles/article/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return juantestapispecAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return juantestapispecAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_articles_article_retrieve(payload) {
  return juantestapispecAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return juantestapispecAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_partial_update(payload) {
  return juantestapispecAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_destroy(payload) {
  return juantestapispecAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juantestapispecAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return juantestapispecAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_rojo_list,
  api_v1_rojo_create,
  api_v1_login_create,
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_rojo_retrieve,
  api_v1_rojo_update,
  api_v1_rojo_partial_update,
  api_v1_rojo_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  rest_auth_registration_create,
  modules_articles_article_list,
  modules_articles_article_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
