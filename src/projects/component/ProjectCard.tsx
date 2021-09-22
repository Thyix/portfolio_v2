import { Box, Button, Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BasicTheme from "../../main/theme/BasicTheme";
import Project from "../domain/Project";

const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: "bold",
        color: BasicTheme.colors.primary,
    },
    description: {
        textAlign: "justify",
        marginBottom: theme.spacing(3),
    },
    button: {
        backgroundColor: BasicTheme.colors.primary
    }
}))

interface Props {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    const classes = useStyles();

    const goToGithubRepository = () => {
        window.location.replace(project.url);
    }

    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>
                        {project.name}
                    </Typography>

                    <Typography className={classes.description}>
                        {project.description}
                    </Typography>

                    <Button onClick={goToGithubRepository} className={classes.button}>
                        Aller vers Github
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProjectCard;