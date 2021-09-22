import React from "react"
import { AppBar, makeStyles } from "@material-ui/core"
import HeaderButton from "./components/HeaderButton";
import BasicTheme from "../theme/BasicTheme";

const useStyles = makeStyles(() => ({
    container: {
        margin: 0,
    },
    sections: {
        padding: "20px 5px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor: BasicTheme.colors.primary
    },
}))

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <AppBar className={classes.sections} position="relative">
                <div style={{ flex: 1 }}>
                    <HeaderButton path="/" label="Presentation" />
                </div>

                <div>
                    <HeaderButton path="/contacts" label="Contacts" />

                    <HeaderButton path="/projects" label="Projects" />

                    <HeaderButton path="/resume" label="Resume" />
                </div>
            </AppBar>
        </div>
    )
}

export default Header;