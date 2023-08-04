export class CreateUserDto {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  password: string;
  companyId: number;
}
