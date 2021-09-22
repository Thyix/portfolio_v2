import React from "react"
import { connect } from "react-redux"
import { getTheme } from "../theme/selectors/themeSelector"
import { SupportedThemes } from "./ThemeSelect"

interface Props {
    theme: SupportedThemes
}

const ExempleDeBox = (props: Props) => {

    const getColor = () => {
        if (props.theme === SupportedThemes.LIGHT) {
            return "#FF0000"
        }
        else {
            return "#00FF00"
        }
    }

    return (
        <div style={{ width: 200, height: 200, backgroundColor: getColor() }}>
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