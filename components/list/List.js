// @flow
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    FlatList,
    ActivityIndicator
} from "react-native";

let styles;

type props = {};

export class List<props> extends React.Component {
    static defaultProps: props = {};

    state = {
        data: []
    };

    componentDidMount() {}

    componentWillReceiveProps(props) {
        const { data } = props;

        if (data !== this.state.data) {
            this.setState({ data });
        }
    }

    renderTitleBar() {
        return (
            <ImageBackground
                source={require("./green.png")}
                style={styles.image2}>
                <Text style={styles.title}>עצים בתור</Text>
            </ImageBackground>
        );
    }

    renderRow = ({ item }) => {
        const { id, forestName, location, toDo, treeType, when } = item;

        const whenText = moment(when)
            .format("LL")
            .replace(/20\d\d/gi, "");

        const countText = moment(when).fromNow();

        return (
            <View key={id} style={styles.row}>
                <View style={styles.col1}>
                    <Text style={styles.forest}>{forestName}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
                <View style={styles.col2}>
                    <Text style={styles.when}>{whenText}</Text>
                    <Text style={styles.count}>{countText}</Text>
                </View>
            </View>
        );
    };

    renderLoading() {
        return null;

        // return <ActivityIndicator style={styles.loader} size={"large"} />;
    }

    render() {
        const { data } = this.state;

        styles = styles || initStyles(this.context);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {this.renderTitleBar()}
                    <FlatList
                        data={data}
                        renderItem={this.renderRow}
                        ListHeaderComponent={this.renderLoading()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const initStyles = ({ colors }) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        loader: {
            marginVertical: 60
        },
        image2: {
            height: 60,
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            fontSize: 24,
            color: "#FFFFFF",
            textAlign: "center",
            fontFamily: "Alef-regular"
        },
        row: {
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#eee"
        },
        col1: {
            flex: 3,
            alignItems: "flex-start",
            justifyContent: "center"
        },
        col2: {
            flex: 2,
            alignItems: "flex-end",
            justifyContent: "center"
        },
        forest: {
            fontSize: 20,
            color: "#7DA242",
            textAlign: "right",
            fontFamily: "Alef-regular"
        },
        location: {
            fontSize: 15,
            color: "#9BAA83",
            textAlign: "right",
            fontFamily: "Alef-regular"
        },
        when: {
            fontSize: 16,
            color: "#7DA242",
            textAlign: "left",
            paddingTop: 4,
            fontFamily: "Alef-regular"
        },
        count: {
            fontSize: 15,
            color: "#9BAA83",
            textAlign: "left",
            paddingTop: 4,
            fontFamily: "Alef-regular"
        }
    });

List.contextTypes = {
    colors: PropTypes.object,
    i18n: PropTypes.object
};

export default List;
