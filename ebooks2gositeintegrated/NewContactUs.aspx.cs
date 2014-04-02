using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
//using eBooks2Go.BusinessLogicLayer;
using System.Threading;

namespace ebooks2gov4
{
    public partial class NewContactUs : System.Web.UI.Page
    {
        protected override void OnPreRenderComplete(EventArgs e)
        {
            string queue = Request.QueryString["queue"];
            if (!String.IsNullOrEmpty(queue))
            {
                using (var waitForSignal = new EventWaitHandle(false, EventResetMode.ManualReset, "A772C2E5243349D68B2A1E5F69B5A550"))
                {
                    if (String.Compare(queue, "10sec") == 0)
                    {
                        waitForSignal.WaitOne(TimeSpan.FromSeconds(10));
                    }
                    else if (String.Compare(queue, "go") == 0)
                    {
                        waitForSignal.Set();
                        Thread.Sleep(1);
                    }
                }
            }

            try
            {
                base.OnPreRenderComplete(e);
            }
            catch (Exception err)
            {

                if (err is NullReferenceException
                    && err.StackTrace.IndexOf("AjaxControlToolkit.ToolkitScriptManager.GetWebResourceAttributes") != 0)
                {
                    Response.Clear();
                    Response.StatusCode = 555;
                    Response.End();
                }
                else
                {
                    throw;
                }
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            //if (!IsPostBack)
            //    FillCountry();
        }


        #region "Fill Country"
        protected void FillCountry()
        {
            //Utilities _utilities = new Utilities();
            //ddlCountry.DataSource = _utilities.GetCountries();
            //ddlCountry.DataTextField = "CountryName";
            //ddlCountry.DataValueField = "CountryId";
            //ddlCountry.DataBind();
            //ListItem l_listCountry = new ListItem("Select Country", "0");
            //ddlCountry.Items.Insert(0, l_listCountry);
            //ddlCountry.SelectedIndex = 0;

        }
        #endregion 
        

        protected void btnSubmit_Click(object sender, ImageClickEventArgs e)
        {
            Captcha1.ValidateCaptcha(txtCaptcha.Text.Trim());
            //if (Captcha1.UserValidated)
            //{

            //    Utilities _utilities = new Utilities();
            //    _utilities.FirstName = txtFirstName.Text.Trim();
            //    _utilities.LastName = txtLastName.Text.Trim();
            //    _utilities.Email = txtEmail.Text.Trim();
            //    _utilities.Phone = txtPhone.Text.Trim();
            //    _utilities.Message = txtMessage.Text.Trim();
            //    _utilities.CountryId = Convert.ToInt64(ddlCountry.SelectedItem.Value);
            //    // _utilities.ParentId = null;
            //    _utilities.IsViewed = false;
            //    _utilities.Status = "Y";
            //    _utilities.CreatedDateTime = System.DateTime.Now;
            //    if (_utilities.AddNewFeedBack() > 0)
            //    {
            //        lblMessage.Text = "";
            //        string _bodyMsg;
            //        clEmail _emailNotifications = new clEmail();
            //        _bodyMsg = _emailNotifications.NewEmailHeader("images/customer_-feedback_header.jpg");
            //        _bodyMsg += _emailNotifications.NewEmailBody(_emailNotifications.FeedbackForm(txtFirstName.Text, txtLastName.Text, txtEmail.Text, txtPhone.Text, txtMessage.Text, ddlCountry.SelectedItem.Text));
            //        _bodyMsg += _emailNotifications.NewEmailFooter(4);
            //        if (chkBxFeedback.Checked)
            //            _emailNotifications.SendFeedEmail(System.Configuration.ConfigurationSettings.AppSettings["FeedbackEmailTo"], txtEmail.Text, "Ebooks2Go Feedback form", _bodyMsg);
            //        else
            //            _emailNotifications.SendFeedEmail(System.Configuration.ConfigurationSettings.AppSettings["FeedbackEmailTo"], null, "Ebooks2Go Feedback form", _bodyMsg);


            //        txtEmail.Focus();
            //        //lblMessage.ForeColor = System.Drawing.Color.Green;
            //        lblMessage.CssClass = "label_up_msg";
            //        lblMessage.Text = "Your form submitted successfully.We will revert back to you shortly.thank you for your interest in ebooks2go!";
            //        ClearValues();
            //    }
            //}
            //else
            //{
            //    lblMessage.ForeColor = System.Drawing.Color.Red;
            //    lblMessage.Text = "Please enter correct captcha text";
            //}
        }




        #region "Clear values"
        private void ClearValues()
        {
            txtEmail.Text = "";
            txtFirstName.Text = "";
            txtLastName.Text = "";
            txtMessage.Text = "";
            txtPhone.Text = "";
        }
        #endregion
        #region "Email address validation"
        /// <summary>
        /// This function is used to validate the email address.
        /// </summary>
        private string EmailCheck(string l_sEmailAddress, string l_sMessage)
        {
            //string l_sPattern = @"^[a-z][a-z|0-9|-|.]*([_][a-z|0-9|]+)*([.][a-z|" +
            //    @"0-9]+([_][a-z|0-9]+)*)?@[a-z][a-z|0-9|-]*\.([a-z]" +
            //    @"[a-z|0-9]*(\.[a-z][a-z|0-9]*)?)$";
            string l_sPattern = @"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                                @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                                @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";
            System.Text.RegularExpressions.Match match =
                Regex.Match(l_sEmailAddress, l_sPattern, RegexOptions.IgnoreCase);

            if (match.Success)
                return "";
            else
                return "<li>" + l_sMessage + "</li>";
        }
        #endregion

        #region "Is VaildPhone Number"
        /// <summary>
        /// This function is used to validate the user has entered valid Phone Number or not.
        /// if the Phone Number is invalid it will return error message else it will return
        /// empty string.
        /// </summary>
        /// <param name="l_sPhoneNumber">User Phone Number as string</param>
        /// <param name="l_sMessage">error message as string</param>
        /// <returns>error message as string</returns>
        public string IsValidPhone(string l_sPhoneNumber, string l_sMessage)
        {

            string l_sPattern = @"[0-9]{1,15}$";

            System.Text.RegularExpressions.Match match =
            Regex.Match(l_sPhoneNumber, l_sPattern, RegexOptions.IgnoreCase);

            if (match.Success)
                return "";
            else
                return "<li>" + l_sMessage + "</li>";
        }
        #endregion
    }
}
