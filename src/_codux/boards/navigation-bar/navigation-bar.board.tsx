import { createBoard } from '@wixc3/react-board';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';

export default createBoard({
    name: 'NavigationBar',
    Board: () => <NavigationBar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1840,
        canvasHeight: 332,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
