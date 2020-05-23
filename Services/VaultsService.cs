using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Vault> Get(string userId)
    {
      return _repo.Get(userId);
    }

    // internal IEnumerable<Vault> GetMy(string userId)
    // {
    //   return _repo.GetMy(userId);
    // }

    public Vault GetOne(int id)
    {
      Vault foundVault = _repo.GetOne(id);
      if (foundVault == null)
      {
        throw new Exception("Invalid Id");
      }
      return foundVault;
    }

    public Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }

    internal string Delete(int id, string userId)
    {
      Vault foundVault = GetOne(id);
      if (foundVault.UserId != userId)
      {
        throw new Exception("This is not your vault!");
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