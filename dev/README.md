# Project Improvement Proposal

 This is a Project Improvement Proposal related to the donation of delta-hub-ts.
 
| Related GitHub Project/Issue                                            | Project Improvement Proposal     | Already Working |
|:-----------------------------------------------------------------------:|:--------------------------------:|:----------------|
| [delta-sharing-rs](https://github.com/delta-incubator/delta-sharing-rs) | :heavy_check_mark: This document | No              |

## Executive Summary

 GitHub facilitates social coding, operating on Git, while DeltaHub facilitates social data sharing,
operating on the Delta Sharing protocol. It has the following features:

1. **It's neither a data catalog nor a data repository, nor a data marketplace:**
 DeltaHub is a service focused solely on data sharing. It provides only the minimum governance features
necessary for data sharing, but allows users to easily search and share the data they bring.

2. **Anyone can become a data provider or recipient:**
 To become a data provider, you need appropriate settings for an object store bucket, but basically,
anyone can become a data provider. All you need to become a recipient is a social account.

3. **Implemented in TypeScript/Next.js/ChakraUI:**
 It's implemented in TypeScript. Though it is still in the mock-up stage, I hope it will become a project
that attracts the interest of front-end engineers and others in this field.

## Project Background

 Delta Lake is recognized as an open table format. However, it also encompasses aspects of an ecosystem,
comprising several code repositories.
 The ecosystem includes delta/delta-rs at its core, encompassing connectors, data injection tools, Delta
Sharing protocol implementations, and more. However, I specifically focused on connectors. Users leveraging
the Delta Lake (Sharing) connector range from data engineers to data scientists and analysts involved in BI
operations, representing a diverse range of technical backgrounds.
 By providing a data platform with a UI that offers "ease of use" and "only essential features" for such users,
we can broaden the base of Delta Lake users. Furthermore, encouraging developers with UI/UX expertise to join
the development community can make the community even more vibrant than before. With these considerations in
mind, I initiated and considered donating this project.
 A platform like this should take a different form from what is commonly known as a metadata platform. While
there are undoubtedly excellent implementations of data catalogs in the world, I envisioned use cases that don't
necessarily require fully-fledged catalog features, such as university students who want to casually share
analyzed data with friends under a certain level of governance or small development teams that don't need data
lineage functionality. This service is intended for use as an entry point into serious data engineering, catering
to scenarios where comprehensive catalog features are not a necessity.

## Project Vision

 As the main outcomes of the project, I am primarily considering the following two points:

1. **Implementation of a Platform:**
 Creating a platform that arouses interest in Delta Lake among light users who have had limited exposure to serious
data engineering, such as university students, BI analysts, and Excel users. The goal is to provide them with
opportunities to incorporate Delta Lake into their daily tasks.

2. **Community Engagement for Front-End Engineers:**
 Encouraging participation in the project from front-end engineers who, until now, may not have found much room to
contribute to the community. The aim is to have them contribute as contributors and bring their valuable UI/UX insights,
which have had limited opportunities for exposure, to contribute to the future development of the community.

## Potential Risks

 However, there are concerns associated with the following two points:

1. **Limited Support and Interest from Front-End Engineers:**
 If we fail to garner sufficient support and interest from front-end engineers, development will still proceed responsibly.
However, there is a potential increase in the development burden on the personnel involved in the project.

2. **Unforeseen Challenges from Cultural Differences and Interaction with Front-End Engineers Not Previously Present in the Community:**
 The interaction with front-end engineers who have not been part of the community before and the potential cultural
differences in advancing the project may lead to unexpected challenges or disruptions.

## Project Scope

 I will implement a UI that covers the essential operations related to Delta Sharing (such as sharing and catalog creation)
and the minimum governance features associated with profiles (expiration date visualization, recipient visibility,
activation/deactivation). This implementation will involve refining and adding features to delta-sharing-rs.

## Project Approach

 With the initiation of the project development, we will actively recruit contributors through social networking platforms
and other channels. Our promotional efforts will target front-end engineers as well as ML engineers interested in LLMs.

## Project Timeline

 We plan to drive the project forward with the goal of completion by the end of this fiscal year.
