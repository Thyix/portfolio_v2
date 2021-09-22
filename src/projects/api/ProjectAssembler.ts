import Project from "../domain/Project";
import { GithubProjectResponse } from "./GithubProjectsApi";

const assembleFromGithubResponse = (
  response: GithubProjectResponse
): Project => {
  return new Project(response.html_url, response.name, response.description);
};

export default {
  assembleFromGithubResponse,
};
