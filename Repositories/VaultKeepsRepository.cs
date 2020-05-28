using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<VaultKeep> Get(string userId)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE userid = @userId";
      return _db.Query<VaultKeep>(sql, new { userId });
    }
    // internal IEnumerable<Vault> GetMy(string userId)
    // {
    //   string sql = "SELECT * FROM vaults WHERE userid = @userId";
    //   return _db.Query<Vault>(sql, new { userId });
    // }
    internal VaultKeep GetOne(int id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }
    internal VaultKeep Create(VaultKeep vaultKeepData)
    {
      //throw new NotImplementedException();
      string sql = @"
        UPDATE keeps set keeps = keeps + 1 where id = @KeepId LIMIT 1;
        INSERT INTO vaultKeeps
        (userId, vaultId, keepId)
        VALUES
        (@UserId, @VaultId, @KeepId);
        SELECT LAST_INSERT_ID()";
    //vaultKeepData.Id = _db.ExecuteScalar<int>(sql, vaultKeepData);
      vaultKeepData.Id = _db.Execute(sql, vaultKeepData);
      return vaultKeepData;
    }
    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id = @Id AND userId = @UserId LIMIT 1";
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