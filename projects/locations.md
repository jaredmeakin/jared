---
title: "Locations"
description: "Update employee locations in a mobile first web app."
---
### Summary

Due to issues with inconsistent data between Sales Force and Active Directory I was tasked with creating a simple application that would allow managers to self-report employ locations. These self-reported locations would need to be saved directly to Microsoft's Active Directory.

![Finished Product](./locations/finished.png)

So, after some research I settled on LDAPjs and Docker with an OpenLDAP image for local development. Also, to make LDAPjs easier to work with I wrote a simple wrapper that allowed us to work with promises over callbacks. 

### User Experience

In addition to writing the application, I was tasked with developing the UI/UX for this application. In the absence of clear direction from stake holders I established a few goals.

The app needed to be fully responsive with a mobile-first experience. It needed to focus on displaying only relevant information. The UI needed to be simple and intuitive with real-time user feedback. Lastly, a manager/director needed the ability to traverse direct reports with employees.

![User Experience](./locations/user-experience.png)

### Conclusion

The end result was a simple, yet intuitive, user interface that allowed managers to easily update the location of their direct reports. Not only resolving the data consistency issues, but also mitigated costs that would have been incurred from Sales Force consultants.

<img src="./locations/demo.gif" style="margin: 0 auto; height: 35rem" />
