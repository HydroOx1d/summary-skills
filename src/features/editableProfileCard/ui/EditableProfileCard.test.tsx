import { screen } from "@testing-library/react";
import { renderTestComponent } from "shared/lib/tests/renderTestComponent/renderTestComponent";
import EditableProfileCard from "./EditableProfileCard";
import { profileReducer } from "../model/slice/profileSlice";
import { Profile } from "entity/Profile";
import { Country } from "entity/Country";
import { Currency } from "entity/Currency";
import userEvent from "@testing-library/user-event";
import { $api } from "shared/api/api";

const profileData: Profile = {
	age: 30,
	avatar: "avatar",
	city: "city",
	country: Country.AMERICA,
	currency: Currency.RUB,
	name: "Mike",
	surname: "Oxmol",
	username: "MikeOxmol",
	id: "1"
};

const storeOptions = {
	initialState: {
		profile: {
			readonly: true,
			data: profileData,
			form: profileData
		},
		user: {
			authData: {
				id: "1"
			}
		}
	},
	asyncReducers: {
		profile: profileReducer
	}
};

describe("Testing editable profile card component", () => { 
	test("edit button works properly", async () => {
		renderTestComponent(<EditableProfileCard profileId="1"/>, storeOptions);

		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditButton"));
		expect(screen.getByTestId("ProfilePageHeader.CancelButton")).toBeInTheDocument();
	});

	test("cancel button works properly", async () => {
		renderTestComponent(<EditableProfileCard profileId="1"/>, storeOptions);
		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditButton"));
		
		await userEvent.clear(screen.getByTestId("ProfileCard.NameInput"));
		await userEvent.clear(screen.getByTestId("ProfileCard.SurnameInput"));

		await userEvent.type(screen.getByTestId("ProfileCard.NameInput"), "user");
		await userEvent.type(screen.getByTestId("ProfileCard.SurnameInput"), "user");

		expect(screen.getByTestId("ProfileCard.NameInput")).toHaveValue("user");
		expect(screen.getByTestId("ProfileCard.SurnameInput")).toHaveValue("user");

		await userEvent.click(screen.getByTestId("ProfilePageHeader.CancelButton"));
		
		expect(screen.getByTestId("ProfileCard.NameInput")).toHaveValue("Mike");
		expect(screen.getByTestId("ProfileCard.SurnameInput")).toHaveValue("Oxmol");
		expect(screen.queryByTestId("ProfilePageHeader.CancelButton")).toBeNull();
	});

	test("save button should'nt work due to the data are wrong", async () => {
		renderTestComponent(<EditableProfileCard profileId="1"/>, storeOptions);
		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditButton"));
		
		await userEvent.clear(screen.getByTestId("ProfileCard.NameInput"));
		
		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditSaveButton"));

		expect(screen.getByTestId("ProfileCard.Error.Paragraph")).toBeInTheDocument();
	});

	test("save button should work", async () => {
		renderTestComponent(<EditableProfileCard profileId="1"/>, storeOptions);
		const mockApi = jest.spyOn($api, "put");
		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditButton"));
		
		await userEvent.clear(screen.getByTestId("ProfileCard.NameInput"));

		await userEvent.type(screen.getByTestId("ProfileCard.NameInput"), "user");

		await userEvent.click(screen.getByTestId("ProfilePageHeader.EditSaveButton"));
		
		expect(mockApi).toHaveBeenCalled();
	});
});