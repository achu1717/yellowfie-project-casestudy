async createPost(body): Promise<Types.CreatePostResult> {
    let token = await AsyncStorage.getItem('token')
    this.apisauce.setHeaders({
      Authorization: token,
      Accept: "application/json",
    })

    console.log("create product - body :", body)
    const response: ApiResponse<any> = await this.apisauce.post(`/v1/post`, body = body)

    console.log("create post response", response)
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    try {
      const resultProduct: Types.CreatePost = {
        post: response.data,
      }
      return { kind: "ok", post: resultProduct }
    } catch {
      return { kind: "bad-data" }
    }
  }