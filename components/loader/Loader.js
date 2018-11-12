// @flow
import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet, Modal, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

let styles;

type props = {};

export class Loader<props> extends React.Component {
    static defaultProps: props = {};

    state = {};

    componentDidMount() {}

    render() {
        styles = styles || initStyles(this.context);

        return (
            <Modal animationType={"slide"} transparent={false} visible={true}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("./bk.png")}
                        style={styles.image}>
                        <Text style={styles.text}>כח עץ</Text>
                        <Animatable.Text
                            style={styles.textLoading}
                            easing="ease-out"
                            iterationCount="infinite"
                            animation="pulse">
                            טוען...
                        </Animatable.Text>
                    </ImageBackground>
                    <ImageBackground
                        source={require("./green.png")}
                        style={styles.image2}>
                        <Text style={styles.quote}>
                            “אם עץ נופל ביער ואף אחד לא שומע, האם הוא השמיע
                            צליל?”
                        </Text>
                    </ImageBackground>
                </View>
            </Modal>
        );
    }
}

const initStyles = ({ colors }) =>
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column"
        },
        image: {
            flex: 3,
            alignItems: "center",
            justifyContent: "center"
        },
        image2: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 40
        },
        text: {
            fontSize: 44,
            color: "#3D5A2C",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Alef-bold"
        },
        textLoading: {
            fontSize: 24,
            color: "#3D5A2C",
            textAlign: "center",
            fontWeight: "200",
            fontFamily: "Alef-regular"
        },
        quote: {
            fontSize: 24,
            color: "#7DA242",
            textAlign: "center",
            fontFamily: "Alef-regular"
        }
    });

Loader.contextTypes = {
    colors: PropTypes.object,
    i18n: PropTypes.object
};

export default Loader;
