import { useEffect, useRef } from 'react';
import io, { ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export const useSocket = (url: string, options?: Partial<ManagerOptions & SocketOptions> | undefined): Socket => {
    const { current: socket } = useRef(io(url, options));

    // close socket on unmount
    useEffect(() => {
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [socket]);

    return socket;
};
