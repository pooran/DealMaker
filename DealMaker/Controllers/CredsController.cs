using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DealMaker.Models;

namespace DealMaker.Controllers
{
    public class CredsController : ApiController
    {
        private DealMakerEntities db = new DealMakerEntities();

        // GET: api/Creds
        public IQueryable<Cred> GetCreds()
        {
            return db.Creds;
        }

        // GET: api/Creds/5
        [ResponseType(typeof(Cred))]
        public IHttpActionResult GetCred(string id)
        {
            Cred cred = db.Creds.Find(id);
            if (cred == null)
            {
                return NotFound();
            }

            return Ok(cred);
        }

        // PUT: api/Creds/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutCred(string id, Cred cred)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != cred.Merchantid)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(cred).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!CredExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        // POST: api/Creds
        [ResponseType(typeof(Cred))]
        public IHttpActionResult PostCred(Cred cred)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Creds.Add(cred);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CredExists(cred.Merchantid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cred.Merchantid }, cred);
        }

        //// DELETE: api/Creds/5
        //[ResponseType(typeof(Cred))]
        //public IHttpActionResult DeleteCred(string id)
        //{
        //    Cred cred = db.Creds.Find(id);
        //    if (cred == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Creds.Remove(cred);
        //    db.SaveChanges();

        //    return Ok(cred);
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CredExists(string id)
        {
            return db.Creds.Count(e => e.Merchantid == id) > 0;
        }
    }
}