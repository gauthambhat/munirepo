using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.OleDb;
using System.IO;

using PerceptiveMCAPI;
using PerceptiveMCAPI.Methods;
using PerceptiveMCAPI.Types;
using PerceptiveMCAPI.Types.Internal;
namespace ebooks2gov4
{
    public partial class mailchimp : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnchimpsubmit_Click(object sender, EventArgs e)
        {
            listBatchSubscribeInput input = new listBatchSubscribeInput();
            // any directive overrides
            input.api_Validate = true;
            input.api_AccessType = EnumValues.AccessType.Serial;
            input.api_OutputType = EnumValues.OutputType.JSON;
            // method parameters
            input.parms.apikey = "0570232845b8738a38093088da59eb1d-us5"; ;
            input.parms.id = "b5cab3a60a";
            input.parms.double_optin = false;
            input.parms.replace_interests = true;
            input.parms.update_existing = true;
            //
            List<Dictionary<string, object>> batch =
            new List<Dictionary<string, object>>();
            //foreach (Subscriber sub_rec in SubscriberList)
            //{
            //    Dictionary<string, object> entry = new Dictionary<string, object>();
            //    entry.Add("EMAIL", sub_rec.email);
            //    entry.Add("EMAIL_TYPE", sub_rec.email_type);
            //    entry.Add("FNAME", sub_rec.first_name);
            //    entry.Add("LNAME", sub_rec.last_name);
            //    DateTime next_payment = sub_rec.last_payment.AddMonths(1);
            //    entry.Add("NEXTPAY", next_payment);
            //    batch.Add(entry);
            //}
            Dictionary<string, object> entry = new Dictionary<string, object>();
            entry.Add("EMAIL", txtmailchimp.Text);
            entry.Add("EMAIL_TYPE", "yahoomail");
            entry.Add("FNAME", "gautham");
            entry.Add("LNAME", "dv");
            DateTime next_payment = DateTime.Now;
            entry.Add("NEXTPAY", next_payment);
            batch.Add(entry);
            input.parms.batch = batch;
            // execution
            listBatchSubscribe cmd = new listBatchSubscribe(input);
            listBatchSubscribeOutput output = cmd.Execute();
            // output, format with user control
            txtmailchimp.Text = "";
        }
    }
}