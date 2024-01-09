import { StateSchema } from "app/providers/store";
import { canEditProfie } from "./canEditProfile";

describe("can edit profile data selector", () => {
	test("should be true", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					id: "1"
				},
			},
			user: {
				authData: {
					id: "1"
				}
			}
		};

		expect(canEditProfie(state as StateSchema)).toBe(true);
	});

	test("should be false", () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					id: "1",
				},
			},
			user: {
				authData: {
					id: "2",
				},
			},
		};

		expect(canEditProfie(state as StateSchema)).toBe(false);
	});
});
