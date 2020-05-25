using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<VaultKeep> Get(string userId)
    {
      return _repo.Get(userId);
    }

    // internal IEnumerable<Vault> GetMy(string userId)
    // {
    //   return _repo.GetMy(userId);
    // }

    public VaultKeep GetOne(int id)
    {
      VaultKeep foundVaultKeep = _repo.GetOne(id);
      if (foundVaultKeep == null)
      {
        throw new Exception("Invalid Id");
      }
      return foundVaultKeep;
    }

    public VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }

    internal string Delete(int id, string userId)
    {
      VaultKeep foundVaultKeep = GetOne(id);
      if (foundVaultKeep.UserId != userId)
      {
        throw new Exception("This is not your vault keep!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Sucessfully deleted.";
      }
      throw new Exception("Delete failed");
    }

    // internal Vault Edit(Vault vaultToUpdate, string userId)
    // {
    //   Vault foundVault = GetOne(vaultToUpdate.Id);
    //   if (foundVault.UserId != userId)
    //   {
    //     throw new Exception("This is not your vault!");
    //   }

    //     if (_repo.Edit(vaultToUpdate, userId))
    //     {
    //       return vaultToUpdate;
    //     }

    //   throw new Exception("error on edit vault");
    // }

  }
}