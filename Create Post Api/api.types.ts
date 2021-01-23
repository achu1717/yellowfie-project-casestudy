export interface CreatePost {
  post: any
}

export type CreatePostResult = { kind: "ok", post: CreatePost } | GeneralApiProblem