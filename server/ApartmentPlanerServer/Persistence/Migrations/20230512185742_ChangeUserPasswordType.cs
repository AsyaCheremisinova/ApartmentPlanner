using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ChangeUserPasswordType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 18, 57, 41, 962, DateTimeKind.Utc).AddTicks(2031),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 18, 55, 40, 133, DateTimeKind.Utc).AddTicks(2756));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "RequestStatusLines",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(2023, 5, 12, 18, 55, 40, 133, DateTimeKind.Utc).AddTicks(2756),
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone",
                oldDefaultValue: new DateTime(2023, 5, 12, 18, 57, 41, 962, DateTimeKind.Utc).AddTicks(2031));
        }
    }
}
