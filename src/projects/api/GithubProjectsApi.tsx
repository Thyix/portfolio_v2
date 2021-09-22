import Project from "../domain/Project";
import ProjectAssembler from "./ProjectAssembler";

export const DEFAULT_USER = "Thyix";
export const API_KEY = "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";

export interface GithubProjectResponse {
    name: string;
    description: string;
    html_url: string;
}

const fetchProjectsFor = async (user: string): Promise<Project[]> => {
    const headers = new Headers();
    headers.append("Authorization", `token ${API_KEY}`);

    const response = await fetch(`https://api.github.com/users/${user}/repos`, {
        method: "GET",
        headers: headers,
    });

    const projectsResponse =  await response.json() as GithubProjectResponse[];

    const projects = projectsResponse.map((projectResponse) => ProjectAssembler.assembleFromGithubResponse(projectResponse));

    return projects;
}

export default {
    fetchProjectsFor,
}