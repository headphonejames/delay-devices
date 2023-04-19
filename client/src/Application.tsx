import React, { useContext } from 'react';
import SocketContext from './contexts/SocketContext';
import EchoSettings from './components/EchoSettings';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
    const { socket, uid, users } = useContext(SocketContext).SocketState;

    return (
        <div>
            <EchoSettings />
            <h2>Socket IO Information:</h2>
            <p>
                Your user ID: <strong>{uid}</strong>
                <br />
                Users online: <strong>{users.length}</strong>
                <br />
                Socket ID: <strong>{socket?.id}</strong>
                <br />
            </p>
        </div>
    );
};

export default Application;
