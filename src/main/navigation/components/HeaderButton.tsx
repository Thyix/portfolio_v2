import React from "react"
import { Button, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
import BasicTheme from "../../theme/BasicTheme"

const useStyles = makeStyles(() => ({
    link: {
        color: BasicTheme.colors.secondary,
        fontWeight: "bold",
    }
}))

interface Props {
    path: string;
    label: string;
}

const HeaderButton = ({ path, label }: Props) => {
    const classes = useStyles();
    return (
        <Button>
            <Link className={classes.link} to={path}>{label}</Link>
        </Button>

    )
}

export default HeaderButton;