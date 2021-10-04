import React from "react"
import { connect } from "react-redux"
import { getThemeValues } from "../theme/BasicTheme"
import { getTheme } from "../theme/selectors/themeSelector"
import { SupportedThemes } from "./ThemeSelect"

interface Props {
    theme: SupportedThemes
}

const ExempleDeBox = (props: Props) => {
    const themeValues = getThemeValues(props.theme);
    return (
        <div style={{ width: 200, height: 200, backgroundColor: themeValues.colors.primary }}>
            Patate
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme: getTheme(state),
    }
}

export default connect(mapStateToProps, () => {})(ExempleDeBox);