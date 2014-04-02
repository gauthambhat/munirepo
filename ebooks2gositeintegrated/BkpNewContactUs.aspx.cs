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
    public partial class BkpNewContactUs : System.Web.UI.Page
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
            if (!IsPostBack)
                FillCountry();
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

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            //string _errorMsg = string.Empty;

            //if (txtFirstName.Text.Trim().Length < 1)
            //    _errorMsg += "<li>Please enter first name</li>";
            //if (txtLastName.Text.Trim().Length < 1)
            //    _errorMsg += "<li>Please enter last name</li>";
            //if (txtEmail.Text.Trim().Length < 1)
            //    _errorMsg += "<li>Please enter email</li>";
            //if (ddlCountry.SelectedIndex< 1)
            //    _errorMsg += "<li>Please select Country</li>";
               
            //else
            //{
            //    _errorMsg += EmailCheck(txtEmail.Text, "Please enter valid email");
            //}

            //if (txtPhone.Text.Trim().Length < 1)
            //    _errorMsg += "";
            //else
            //{
            //    _errorMsg += IsValidPhone(txtPhone.Text, "Please enter valid Phone");
            //}
            //if (txtMessage.Text.Trim().Length < 1)
            //    _errorMsg += "<li>Please enter message</li>";

            //if (_errorMsg.Length < 1)
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
            //        EmailNotifications _emailNotifications = new EmailNotifications();
            //        string _emailContent = _emailNotifications.EmailHeader();
            //        string _bodyMsg = string.Empty;


            //        _bodyMsg = "<table><tr><td>First Name</td> <td>" + txtFirstName.Text + "</td></tr> "
            //            + "<tr><td>Last Name</td> <td>" + txtLastName.Text + "</td></tr> "
            //            + "<tr><td>Email</td> <td>" + txtEmail.Text + "</td></tr> "
            //            + "<tr><td>Phone #</td> <td>" + txtPhone.Text + "</td></tr> "
            //            + "<tr><td>Message</td> <td>" + txtMessage.Text + "</td></tr> "
            //            + "</table>";
            //        _emailContent += _bodyMsg;
            //        _emailContent += _emailNotifications.EmailFooter();

            //        _emailNotifications.SendEmail(System.Configuration.ConfigurationSettings.AppSettings["FeedbackEmailTo"], "", "Ebooks2Go Feedback form", _emailContent);
            //        _emailNotifications = null;


            //        txtEmail.Focus();
            //        //lblMessage.ForeColor = System.Drawing.Color.Green;
            //        lblMessage.CssClass = "label_up_msg";
            //        lblMessage.Text = "Your feedback sent successfully";
            //        ClearValues();
            //    }
            //}
            //else
            //{
            //    //lblMessage.ForeColor = System.Drawing.Color.Red;
            //    lblMessage.CssClass = "label_Del_msg";
            //    lblMessage.Text = "<ul>" + _errorMsg + "</ul>";
               
                
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
