import { User } from "../../models/User";
import { NotFoundError } from "../../errors/applicationError";
import { ApplicationOperation } from "../applicationOperation";
import { IndexForm } from "../../forms/users/indexForm";

export default class IndexOperation extends ApplicationOperation {
  public users: User[];

  public async call() {
    await this.stepValidation();
    await this.stepAuthentication();
    await this.stepAuthorization();
    await this.stepLoadUsers();
    // TODO continue Step Function
  }

  private async stepValidation() {
    let form = new IndexForm();
    form.limit = 10000;
    form.valid();
  }

  private async stepLoadUsers() {
    this.users = await User.find()
  }
}
