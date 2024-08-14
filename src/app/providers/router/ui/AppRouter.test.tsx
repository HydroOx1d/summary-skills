import { renderTestComponent } from "@/shared/lib/tests/renderTestComponent/renderTestComponent";
import { AppRouter } from "./AppRouter";
import { getAboutRoute, getAdminRoute, getProfleRoute } from "@/shared/constants/router";
import { screen } from "@testing-library/react";
import { UserRoles } from "@/entity/User";

describe("AppRouter", () => {
	it("should render about page", async () => {
		renderTestComponent(<AppRouter />, {
			route: getAboutRoute()
		});

		const element = await screen.findByTestId("AboutPage");
		expect(element).toBeInTheDocument();
	});


	it("should render not found page", async () => {
		renderTestComponent(<AppRouter />, {
			route: "/asfsafsa"
		});

		const element = await screen.findByTestId("NotFoundPage");
		expect(element).toBeInTheDocument();
	});

	it("redirect to home page if user is not authorized", async () => {
		renderTestComponent(<AppRouter />, {
			route: getProfleRoute("123"),
		});

		const element = await screen.findByTestId("HomePage");
		expect(element).toBeInTheDocument();
	});

	it("redirect to forbidden page if user doesn't have permission", async () => {
		renderTestComponent(<AppRouter />, {
			route: getAdminRoute(),
			initialState: {
				user: {
					authData: {}
				}
			}
		});

		const element = await screen.findByTestId("ForbiddenPage");
		expect(element).toBeInTheDocument();
	});

	it("render admin panel page if user has permission", async () => {
		renderTestComponent(<AppRouter />, {
			route: getAdminRoute(),
			initialState: {
				user: {
					authData: {
						roles: [UserRoles.ADMIN]
					}
				}
			}
		});

		const element = await screen.findByTestId("AdminPanelPage");
		expect(element).toBeInTheDocument();
	});
});
