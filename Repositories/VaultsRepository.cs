using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Vault> Get(string userId)
    {
      string sql = "SELECT * FROM vaults WHERE userid = @userId";
      return _db.Query<Vault>(sql, new { userId });
    }
    // internal IEnumerable<Vault> GetMy(string userId)
    // {
    //   string sql = "SELECT * FROM vaults WHERE userid = @userId";
    //   return _db.Query<Vault>(sql, new { userId });
    // }
    internal Vault GetOne(int id)
    {
      string sql = "SELECT * FROM vaults WHERE id = @Id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });
    }
    internal Vault Create(Vault vaultData)
    {
      //throw new NotImplementedException();
      string sql = @"
        INSERT INTO vaults
        (userId, name, description)
        VALUES
        (@UserId, @Name, @Description);
        SELECT LAST_INSERT_ID()";
      vaultData.Id = _db.ExecuteScalar<int>(sql, vaultData);
      return vaultData;
    }
    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM vaults WHERE id = @Id AND userId = @UserId LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id, userId });
      return affectedRows == 1;
    }
    // internal bool AddView(Keep KeepData)
    // {
    //   string sql = @"
    //     UPDATE keeps
    //     SET
    //       views = views + 1
    //     WHERE id = @Id LIMIT 1";
    //   int affectedRows = _db.Execute(sql, new {KeepData.Id});
    //   return affectedRows == 1;
    // }

    // internal bool AddKeep(Keep KeepData)
    // {
    //   string sql = @"
    //     UPDATE keeps
    //     SET
    //       keeps = keeps + 1
    //     WHERE id = @Id LIMIT 1";
    //   int affectedRows = _db.Execute(sql, new {KeepData.Id});
    //   return affectedRows == 1;
    // }
  }
}