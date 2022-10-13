// const isLogin = require("../pages/Login")
import { render, screen} from "@testing-library/react"
import Login from "../pages/Login/Login"

test("on initial render, the login button is enabled", () => {
    render(<Login/>);

    expect(screen.getByText('LOG IN').closest("button"))
    expect(screen.getByRole("button", {name: /LOG IN/i})).toBeEnabled();
})
export {}