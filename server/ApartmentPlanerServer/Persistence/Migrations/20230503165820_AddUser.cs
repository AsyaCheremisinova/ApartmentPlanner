using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_File_ImageId",
                table: "Furniture");

            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_File_SourceFileId",
                table: "Furniture");

            migrationBuilder.DropPrimaryKey(
                name: "PK_File",
                table: "File");

            migrationBuilder.RenameTable(
                name: "File",
                newName: "Files");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Files",
                table: "Files",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(45)", maxLength: 45, nullable: false),
                    Login = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "character varying(45)", maxLength: 45, nullable: false),
                    Password = table.Column<string>(type: "character varying(45)", maxLength: 45, nullable: false),
                    RoleId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_RoleId",
                table: "Users",
                column: "RoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_Files_ImageId",
                table: "Furniture",
                column: "ImageId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_Files_SourceFileId",
                table: "Furniture",
                column: "SourceFileId",
                principalTable: "Files",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_Files_ImageId",
                table: "Furniture");

            migrationBuilder.DropForeignKey(
                name: "FK_Furniture_Files_SourceFileId",
                table: "Furniture");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Files",
                table: "Files");

            migrationBuilder.RenameTable(
                name: "Files",
                newName: "File");

            migrationBuilder.AddPrimaryKey(
                name: "PK_File",
                table: "File",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_File_ImageId",
                table: "Furniture",
                column: "ImageId",
                principalTable: "File",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Furniture_File_SourceFileId",
                table: "Furniture",
                column: "SourceFileId",
                principalTable: "File",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
