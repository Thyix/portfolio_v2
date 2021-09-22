import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import GithubProjectsApi, { DEFAULT_USER } from "./api/GithubProjectsApi";
import ProjectCard from "./component/ProjectCard";
import Project from "./domain/Project";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "bold",
        marginBottom: theme.spacing(3),
    },
}))


const ProjectsScreen = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const classes = useStyles();
    const { t } = useTranslation("project");

    useEffect(() => {
        const getProjects = async (): Promise<void> => {
            const projects = await GithubProjectsApi.fetchProjectsFor(DEFAULT_USER)

            setProjects(projects);
        }

        getProjects();
    }, []);

    return (
        <>
            <Typography className={classes.title} variant="h1">{t("myProject")}</Typography>

            <Grid container justify="center" spacing={2}>
                {projects.map((project) => (
                    <Grid item xs={4}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProjectsScreen;