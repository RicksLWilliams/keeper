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
  public class VaultsController : ControllerBase
  {
    private readonly VaultsService _vs;
    // private readonly KeepsService _ks;
    public VaultsController(VaultsService vs)
    {
      _vs = vs;
    }
    // public VaultsController(KeepsService ks)
    // {
    //   _ks = ks;
    // }

    [Authorize]
    [HttpGet]
    public ActionResult<IEnumerable<Vault>> Get()
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("You must be logged in to get your vaults.");
        }
        string userId = user.Value;
        //return Ok(_cs.GetByUserId(userId));
        return Ok(_vs.Get(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    //Do I need this?  should I lock this down?
    [Authorize]
    [HttpGet("{id}")]
    public ActionResult<Vault> GetOne(int id)
    {
      try
      {
        return Ok(_vs.GetOne(id));
      }
      catch (System.Exception err)
      {
        return BadRequest(err.Message);
      }
    }
        //Do I need this?  should I lock this down?
    [Authorize]
    [HttpGet("{id}/keeps")]
    public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeepsByVaultId(int id)
    {
      try
      {
        return Ok(_vs.GetKeepsByVaultId(id));
      }
      catch (System.Exception err)
      {
        return BadRequest(err.Message);
      }
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Vault> Post([FromBody] Vault newVault)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newVault.UserId = userId;
        return Ok(_vs.Create(newVault));
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
        return Ok(_vs.Delete(id, userId));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

  }
}