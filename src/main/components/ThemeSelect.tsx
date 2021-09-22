import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import React, { useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import { toggleTheme } from "../theme/actions/themeActions"
import { getTheme } from "../theme/selectors/themeSelector"

export enum SupportedThemes {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

interface Props {
    theme: any;
    actions: {
        toggleTheme: (theme: SupportedThemes) => void;
    }
}

const ThemeSelect = (props: Props) => {
    const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.LIGHT)
    console.log(props.theme)

    const handleChange = (event: any) => {
        const newTheme = event.target.value;

        setTheme(newTheme);
        props.actions.toggleTheme(newTheme);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Thème</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={theme}
                label="Thème"
                onChange={handleChange}
                >
                    <MenuItem value={SupportedThemes.LIGHT}>Light</MenuItem>
                    <MenuItem value={SupportedThemes.DARK}>Dark</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators({
            toggleTheme: toggleTheme,
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelect);