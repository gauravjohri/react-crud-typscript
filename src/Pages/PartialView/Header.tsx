import { Navigation } from "./Navigation"
import { WelcomeMsg } from "./WelcomeMsg"

export const Header = () => {
    return (
        <div>
            <WelcomeMsg />
            <Navigation />
        </div>
    )
}