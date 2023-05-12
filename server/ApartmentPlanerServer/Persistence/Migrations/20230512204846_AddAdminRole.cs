using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddAdminRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 20, 48, 46, 717, DateTimeKind.Utc).AddTicks(8334),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 20, 31, 11, 553, DateTimeKind.Utc).AddTicks(925));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Login", "Name", "Password", "RoleId" },
                values: new object[] { 1, "admin@admin.com", "admin", "admin", "admin", 1 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 20, 31, 11, 553, DateTimeKind.Utc).AddTicks(925),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 20, 48, 46, 717, DateTimeKind.Utc).AddTicks(8334));
        }
    }
}
