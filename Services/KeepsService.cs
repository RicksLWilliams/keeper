using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    internal IEnumerable<Keep> GetMy(string userId)
    {
      return _repo.GetMy(userId);
    }

    public Keep GetOne(int id)
    {
      Keep foundKeep = _repo.GetOne(id);
      if (foundKeep == null)
      {
        throw new Exception("Invalid Id");
      }
      return foundKeep;
    }

    public Keep Create(Keep newKeep)
    {
      return _repo.Create(newKeep);
    }

    internal string Delete(int id, string userId)
    {
      Keep foundKeep = GetOne(id);
      if (foundKeep.UserId != userId)
      {
        throw new Exception("This is not your keep!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Sucessfully deleted.";
      }
      throw new Exception("Delete failed");
    }

    internal Keep Edit(Keep keepToUpdate, string userId)
    {
      Keep foundKeep = GetOne(keepToUpdate.Id);
      if (keepToUpdate.Keeps == 1)
      {
        if (_repo.AddKeep(keepToUpdate))
        {
          foundKeep.Keeps++;
          return foundKeep;
        }
      }
      if (keepToUpdate.Views == 1)
      {
        if (_repo.AddView(keepToUpdate))
        {
          foundKeep.Views++;
          return foundKeep;
        }
      }
      if (keepToUpdate.Shares == 1)
      {
        if (_repo.AddShare(keepToUpdate))
        {
          foundKeep.Shares++;
          return foundKeep;
        }
      }

      throw new Exception("error on edit keep");
    }

  }
}