import React from "react";
import Api from "./Api";

let instance = null;

class ProjectApi {
  constructor() {
    if (!instance) {
      instance = this
    }
    return instance;
  }

  getAllProjects() {
    return (Api.callApiGet("getAllProjects"))
  }

  getAllTags(id) {
    return (Api.callApiGet("getAllProjectTagsById/" + id))
  }

  likeProject(id, userId) {
    userData = {"id": id, "userId": userId}
    return (Api.callApiPost("likeProjectById", userData))
  }

  followProject(id, userId) {
    userData = {"id": id, "userId": userId}
    return (Api.callApiPost("followProjectById", userData))
  }

  newestProjects() {
    return (Api.callApiGet("getAllProjects"))
  }

  oldestProjects() {
    return (Api.callApiGet("getAllProjects"))
  }

  mostLikedProjects() {
    return (Api.callApiGet("getAllProjects"))
  }

  mostFollowedProjects() {
    return (Api.callApiGet("getAllProjects"))
  }

}

const projectApi = new ProjectApi();
export default projectApi;