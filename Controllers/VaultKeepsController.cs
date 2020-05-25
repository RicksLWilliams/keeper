using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VaultKeepsController : ControllerBase
  {
    private readonly VaultKeepsService _vks;
    public VaultKeepsController(VaultKeepsService vks)
    {
      _vks = vks;
    }
    [Authorize]
    [HttpGet]
    public ActionResult<IEnumerable<VaultKeep>> Get()
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("You must be logged in to get your vault keeps.");
        }
        string userId = user.Value;
        //return Ok(_cs.GetByUserId(userId));
        return Ok(_vks.Get(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    //Do I need this?  should I lock this down?
    [Authorize]
    [HttpGet("{id}")]
    public ActionResult<VaultKeep> GetOne(int id)
    {
      try
      {
        return Ok(_vks.GetOne(id));
      }
      catch (System.Exception err)
      {
        return BadRequest(err.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public ActionResult<VaultKeep> Post([FromBody] VaultKeep newVaultKeep)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newVaultKeep.UserId = userId;
        return Ok(_vks.Create(newVaultKeep));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [Authorize]
    [HttpDelete("{id}")]
    public ActionResult<string> Delete(int id)
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("you must be logged in to delete");
        }
        string userId = user.Value;
        return Ok(_vks.Delete(id, userId));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    // [Authorize]
    // [HttpPut("{id}")]
    // //I don't think this is required
    // public ActionResult<Vault> Edit(int id, [FromBody] Vault vaultToUpdate)
    // {
    //   try
    //   {
    //     string userId = "";
    //     vaultToUpdate.Id = id;
    //     Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
    //     if (user == null)
    //     {
    //       throw new Exception("must be logged in");
    //       //return Ok(_ks.Edit(keepToUpdate, ""));
    //     }
    //     else
    //     {
    //       userId = user.Value;
    //       return Ok(_vs.Edit(vaultToUpdate, userId));
    //     }
    //   }
    //   catch (System.Exception err)
    //   {
    //     return BadRequest(err.Message);
    //   }
    // }

  }
}