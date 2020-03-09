import React, { Component } from 'react';
import { Text } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
    state = {
        stars: [],
    };

    async componentDidMount() {
        const { navigation, route } = this.props;
        navigation.setOptions({ title: route.params.user.name });
        const { user } = route.params;

        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data });
    }

    render() {
        return <Text>Teste</Text>;
    }
}
