<template>
    <form class="container mt-5">
        <img src="" alt="Logo" style="position: absolute; top: 0; left: 0;">
        <fieldset>
            <legend>Job Application Form</legend>
            <div class="form-group">
                <label for="position">Position applying for:</label>
                <input type="text" id="position" name="position" class="form-control">
                <label for="preferredArea">Preferred area:</label>
                <input type="text" id="preferredArea" name="preferredArea" class="form-control"><br><br>
            </div>
            <div class="form-group">
                <label>Source:</label><br>
                <input type="checkbox" id="referral" name="source" value="Referral">
                <label for="referral">Referral</label>
                <label for="referralBy">by whom:</label>
                <input type="text" id="referralBy" name="referralBy" class="form-control">

                <input type="checkbox" id="onlineAd" name="source" value="Online Advertisement">
                <label for="onlineAd">Online Advertisement</label>

                <input type="checkbox" id="walkIn" name="source" value="Walk-In">
                <label for="walkIn">Walk-In</label>

                <input type="checkbox" id="others" name="source" value="Others">
                <label for="others">Others</label><br><br>
            </div>
            <div class="form-group">
                <h2>Personal information</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control">

                <label for="nickname">Nickname:</label>
                <input type="text" id="nickname" name="nickname" class="form-control"><br><br>

                <label for="birthdate">Birth date:</label>
                <input type="date" id="birthdate" name="birthdate" class="form-control">

                <label for="placeOfBirth">Place of birth:</label>
                <input type="text" id="placeOfBirth" name="placeOfBirth" class="form-control">

                <label for="gender">Gender:</label>
                <input type="text" id="gender" name="gender" class="form-control">

                <label for="bloodType">Blood Type:</label>
                <input type="text" id="bloodType" name="bloodType" class="form-control"><br><br>

                <label for="homeAddress">Home address:</label>
                <input type="text" id="homeAddress" name="homeAddress" class="form-control"><br><br>

                <label for="mobileNo">Mobile Number:</label>
                <input type="text" id="mobileNo" name="mobileNo" class="form-control">

                <label for="landline">Landline:</label>
                <input type="text" id="landline" name="landline" class="form-control">

                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" class="form-control"><br><br>
            </div>
            <div class="form-group">
                <label for="citizenship">Citizenship:</label><br>
                <input type="checkbox" id="citizenship" name="source" value="citizenship">
                <label for="filipino">Filipino</label>
                <label for="others">Others, please specify</label>
                <input type="text" id="others" name="others" class="form-control"><br><br>

                <label for="naturalizationInfo">If naturalized citizen of the Philippines, give date and place of
                    naturalization and attached photocopy of certificate of naturalization:</label>
                <input type="text" id="naturalizationInfo" name="naturalizationInfo" class="form-control"><br><br>

                <label for="maritalStatus">Marital Status:</label>
                <input type="text" id="maritalStatus" name="maritalStatus" class="form-control">

                <div id="ifMarried">
                    <label for="maidenName">If Married, a) Maiden Name</label>
                    <input type="text" id="maidenName" name="maidenName" class="form-control">

                    <label for="spouseName">b) Name of Spouse:</label>
                    <input type="text" id="spouseName" name="spouseName" class="form-control">
                </div>

                <label for="sssNo">SSS No.:</label>
                <input type="text" id="sssNo" name="sssNo" class="form-control">

                <label for="tin">Tax Identification No.:</label>
                <input type="text" id="tin" name="tin" class="form-control"><br><br>

                <label for="lifeInsuranceExperience">Life Insurance Experience:</label>
                <input type="checkbox" id="yesLife" name="lifeInsuranceExperience" value="Yes">
                <label for="yesLife">Yes</label>

                <input type="checkbox" id="noLife" name="lifeInsuranceExperience" value="No">
                <label for="noLife">No</label><br><br>

                <label for="insuranceType">If yes, check the type:</label><br>
                <input type="checkbox" id="traditional" name="insuranceType" value="Traditional">
                <label for="traditional">Traditional</label>

                <input type="checkbox" id="variable" name="insuranceType" value="Variable">
                <label for="variable">Variable</label><br><br>

                <label for="recentInsuranceCompany">Most recent Life Insurance Company:</label>
                <input type="text" id="recentInsuranceCompany" name="recentInsuranceCompany" class="form-control"><br>
            </div>

            <h3>Educational Background</h3>

            <table class="table" border="1">
                <tr>
                    <th></th>
                    <th style="text-align: center;">SCHOOL</th>
                    <th style="text-align: center;">COURSE</th>
                    <th style="text-align: center;">YEAR GRADUATED</th>
                </tr>
                <tr>
                    <td>High School</td>
                    <td><input type="text" name="highSchool" class="form-control"></td>
                    <td><input type="text" name="highSchoolCourse" class="form-control"></td>
                    <td><input type="text" name="highSchoolYear" class="form-control"></td>
                </tr>
                <tr>
                    <td>College</td>
                    <td><input type="text" name="college" class="form-control"></td>
                    <td><input type="text" name="collegeCourse" class="form-control"></td>
                    <td><input type="text" name="collegeYear" class="form-control"></td>
                </tr>
                <tr>
                    <td>Graduate School</td>
                    <td><input type="text" name="graduateSchool" class="form-control"></td>
                    <td><input type="text" name="graduateCourse" class="form-control"></td>
                    <td><input type="text" name="graduateYear" class="form-control"></td>
                </tr>
            </table>
            <h3>Employment History</h3>
            <table class="table" border="1">
                <tr>
                    <th style="text-align: center;">NAME AND ADDRESS OF EMPLOYER</th>
                    <th style="text-align: center;">POSITION</th>
                    <th style="text-align: center;" colspan="2">EMPLOYMENT DATE</th>
                    <th style="text-align: center;">REASON FOR LEAVING</th>
                </tr>
                <tr>
                    <td><input type="text" name="companyName1" class="form-control"></td>
                    <td><input type="text" name="position1" class="form-control"></td>
                    <td><input type="text" name="employmentFrom1" class="form-control" placeholder="From"></td>
                    <td><input type="text" name="employmentTo1" class="form-control" placeholder="To"></td>
                    <td><input type="text" name="reason1" class="form-control"></td>
                </tr>
                <tr>
                    <td><input type="text" name="companyName2" class="form-control"></td>
                    <td><input type="text" name="position2" class="form-control"></td>
                    <td><input type="text" name="employmentFrom2" class="form-control" placeholder="From"></td>
                    <td><input type="text" name="employmentTo2" class="form-control" placeholder="To"></td>
                    <td><input type="text" name="reason2" class="form-control"></td>
                </tr>
                <tr>
                    <td><input type="text" name="companyName3" class="form-control"></td>
                    <td><input type="text" name="position3" class="form-control"></td>
                    <td><input type="text" name="employmentFrom3" class="form-control" placeholder="From"></td>
                    <td><input type="text" name="employmentTo3" class="form-control" placeholder="To"></td>
                    <td><input type="text" name="reason3" class="form-control"></td>
                </tr>
            </table>

            
            <h3>Most recent employer’s contact details</h3>
            <table class="table" border="1">
                <tr>
                    <td>Company Name:<input type="text" name="companyName" class="form-control"></td>
                    <td>Position:<input type="text" name="position" class="form-control"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">Employer’s contact details:</td>
                </tr>
                <tr>
                    <td><input type="text" name="contactName" class="form-control" placeholder="Contact Name:"></td>
                    <td><input type="text" name="contactPosition" class="form-control" placeholder="Position:"></td>
                </tr>
                <tr>
                    <td><input type="text" name="emailAddress" class="form-control" placeholder="Email Address:"></td>
                    <td><input type="text" name="contactNumber" class="form-control" placeholder="Contact Number:"></td>
                </tr>
                <tr>
                    <td colspan="2">If currently employed, have you already tendered your resignation? 
                        <div class="form-check form-check-inline">
                            <label class="form-check-label" for="yesCheckbox">Yes</label>
                          <input type="checkbox" name="yes" class="form-check-input" id="yesCheckbox">
                          
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label" for="noCheckbox">No</label>
                          <input type="checkbox" name="no" class="form-check-input" id="noCheckbox">
                          
                        </div>
                      </td>
                      
                </tr>
                <tr>
                    <td colspan="2">1. If answer is No, are we allowed to conduct the employment verification? 
                        <div class="form-check form-check-inline">
                            <label class="form-check-label" for="yesCheckbox">Yes</label>
                          <input type="checkbox" name="yes" class="form-check-input" id="yesCheckbox">
                          
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label" for="noCheckbox">No</label>
                          <input type="checkbox" name="no" class="form-check-input" id="noCheckbox">
                          
                        </div>
                      </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" name="additional2" class="form-control" placeholder="2. If answer in number 1 is no, please provide details "></td>
                </tr>
            </table>

            
            

            <input type="submit" value="Submit" class="btn btn-primary">
        </fieldset>
    </form>
</template>
<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.6;
    }

    h1,
    h2,
    h3 {
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
    }

    label {
        font-weight: bold;
    }
</style>
