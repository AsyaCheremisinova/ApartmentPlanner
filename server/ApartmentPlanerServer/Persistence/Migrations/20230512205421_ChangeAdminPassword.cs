using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ChangeAdminPassword : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 20, 54, 20, 977, DateTimeKind.Utc).AddTicks(6106),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 20, 48, 46, 717, DateTimeKind.Utc).AddTicks(8334));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "$argon2id$v=19$m=65536,t=3,p=1$yzeYYFOcJb2SnfrOmTOYCQ$60+Lg/aJaEoGvEiz9bx562Rd3n08+fSzQFgrk3l5m0I");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 20, 48, 46, 717, DateTimeKind.Utc).AddTicks(8334),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 20, 54, 20, 977, DateTimeKind.Utc).AddTicks(6106));

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "Password",
                value: "admin");
        }
    }
}
