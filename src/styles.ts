import { CSSProperties } from 'react';
import {background} from "./constants/images";

const styles: { [key: string]: CSSProperties } = {
    App: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
    },
};

export default styles;