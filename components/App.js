/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import List from "./list/List";
import Loader from "./loader/Loader";
import * as api from "../utils/api";
import moment from "moment";
import "moment/locale/he";

moment.locale("he");

type Props = {};
export default class App extends Component<Props> {
    state = {
        data: [],
        isLoading: false
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        api.getList().then(data => {
            setTimeout(() => {
                this.setState({ isLoading: false, data });
            }, 3000);
        });
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={styles.container}>
                <List data={data} />
                {isLoading ? <Loader /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    }
});
