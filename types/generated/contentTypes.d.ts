import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAnnouncementAnnouncement extends Schema.CollectionType {
  collectionName: 'announcements';
  info: {
    description: '';
    displayName: 'Announcement';
    pluralName: 'announcements';
    singularName: 'announcement';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    announcement: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    department: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'api::department.department'
    >;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::announcement.announcement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAshokaDepartmentAshokaDepartment
  extends Schema.CollectionType {
  collectionName: 'ashoka_departments';
  info: {
    description: '';
    displayName: 'Ashoka Department';
    pluralName: 'ashoka-departments';
    singularName: 'ashoka-department';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    code: Attribute.String & Attribute.Required & Attribute.Unique;
    course_reviews: Attribute.Relation<
      'api::ashoka-department.ashoka-department',
      'manyToMany',
      'api::course-review.course-review'
    >;
    courses: Attribute.Relation<
      'api::ashoka-department.ashoka-department',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ashoka-department.ashoka-department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faculties: Attribute.Relation<
      'api::ashoka-department.ashoka-department',
      'manyToMany',
      'api::faculty.faculty'
    >;
    name: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::ashoka-department.ashoka-department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAssetAsset extends Schema.CollectionType {
  collectionName: 'assets';
  info: {
    description: '';
    displayName: 'Asset';
    pluralName: 'assets';
    singularName: 'asset';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    borrow_requests: Attribute.Relation<
      'api::asset.asset',
      'oneToMany',
      'api::borrow-request.borrow-request'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    last_borrow_request: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'api::borrow-request.borrow-request'
    >;
    model: Attribute.String;
    name: Attribute.String;
    type: Attribute.Enumeration<['mobile', 'cable', 'adapter']>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::asset.asset',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBorrowRequestBorrowRequest extends Schema.CollectionType {
  collectionName: 'borrow_requests';
  info: {
    description: '';
    displayName: 'Borrow Request';
    pluralName: 'borrow-requests';
    singularName: 'borrow-request';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    asset: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'manyToOne',
      'api::asset.asset'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    from: Attribute.Date;
    is_the_latest_booking_of: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'oneToOne',
      'api::asset.asset'
    >;
    issued: Attribute.Integer;
    issued_by: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    issued_on: Attribute.Date;
    reason: Attribute.Text;
    returned: Attribute.Integer;
    returned_on: Attribute.Date;
    returned_to: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    to: Attribute.Date;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::borrow-request.borrow-request',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiCalendarEventCalendarEvent extends Schema.CollectionType {
  collectionName: 'calendar_events';
  info: {
    description: '';
    displayName: 'Calendar Events';
    pluralName: 'calendar-events';
    singularName: 'calendar-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    allDay: Attribute.Boolean & Attribute.Required;
    color: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::calendar-event.calendar-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    display: Attribute.String;
    end: Attribute.DateTime;
    host: Attribute.Email;
    kind: Attribute.String;
    publishedAt: Attribute.DateTime;
    start: Attribute.DateTime;
    title: Attribute.String;
    uid: Attribute.UID;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::calendar-event.calendar-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    venue: Attribute.String;
  };
}

export interface ApiCommentComment extends Schema.CollectionType {
  collectionName: 'comments';
  info: {
    description: '';
    displayName: 'Comment';
    pluralName: 'comments';
    singularName: 'comment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Attribute.Relation<
      'api::comment.comment',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    comment: Attribute.Text;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    forum: Attribute.Relation<
      'api::comment.comment',
      'manyToOne',
      'api::forum.forum'
    >;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::comment.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseReviewCourseReview extends Schema.CollectionType {
  collectionName: 'course_reviews';
  info: {
    description: '';
    displayName: 'Course Review';
    pluralName: 'course-reviews';
    singularName: 'course-review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accommodations_provided: Attribute.Text;
    ashoka_departments: Attribute.Relation<
      'api::course-review.course-review',
      'manyToMany',
      'api::ashoka-department.ashoka-department'
    >;
    assignment_relatability: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    assignment_relatability_elaborate: Attribute.Text;
    batch: Attribute.String;
    course: Attribute.Relation<
      'api::course-review.course-review',
      'manyToOne',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course-review.course-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    distributed_grading_components: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    extracredit_provided: Attribute.Boolean;
    faculties: Attribute.Relation<
      'api::course-review.course-review',
      'manyToMany',
      'api::faculty.faculty'
    >;
    general_comments: Attribute.Text;
    good_lecturer: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    good_lecturer_elaborate: Attribute.Text;
    grade_gotten: Attribute.Enumeration<
      [
        'A/A-',
        'B+/B/B-',
        'C+/C/C-',
        'D+/D/D-',
        'F',
        'Have Not Received Grade',
        'Do Not Wish to Reveal'
      ]
    >;
    grading_components_distributed_elaborate: Attribute.Text;
    grading_transparent: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    grading_transparent_elaborate: Attribute.Text;
    grading_type: Attribute.Enumeration<['absolute', 'relative']>;
    influence_of_tf: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
    mode: Attribute.Enumeration<['online', 'offline']>;
    openness_to_doubts: Attribute.Text;
    publishedAt: Attribute.DateTime;
    recommend: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    study_hours_outside_class: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::course-review.course-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    description: '';
    displayName: 'Course';
    pluralName: 'courses';
    singularName: 'course';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ashoka_departments: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::ashoka-department.ashoka-department'
    >;
    classDetails: Attribute.String;
    course_reviews: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::course-review.course-review'
    >;
    courseCode: Attribute.String;
    courseTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Text;
    faculties: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::faculty.faculty'
    >;
    prerequisites: Attribute.JSON;
    reviews: Attribute.Relation<
      'api::course.course',
      'oneToMany',
      'api::review.review'
    >;
    semester: Attribute.Enumeration<['monsoon', 'summer', 'spring']>;
    uid: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    year: Attribute.Integer;
  };
}

export interface ApiDepartmentDepartment extends Schema.CollectionType {
  collectionName: 'departments';
  info: {
    description: '';
    displayName: 'Department';
    pluralName: 'departments';
    singularName: 'department';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    announcement: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'api::announcement.announcement'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    forums: Attribute.Relation<
      'api::department.department',
      'oneToMany',
      'api::forum.forum'
    >;
    name: Attribute.String;
    profile: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    tickets: Attribute.Relation<
      'api::department.department',
      'manyToMany',
      'api::ticket.ticket'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFacultyFaculty extends Schema.CollectionType {
  collectionName: 'faculties';
  info: {
    description: '';
    displayName: 'Faculty';
    pluralName: 'faculties';
    singularName: 'faculty';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ashoka_departments: Attribute.Relation<
      'api::faculty.faculty',
      'manyToMany',
      'api::ashoka-department.ashoka-department'
    >;
    course_reviews: Attribute.Relation<
      'api::faculty.faculty',
      'manyToMany',
      'api::course-review.course-review'
    >;
    courses: Attribute.Relation<
      'api::faculty.faculty',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faculty.faculty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email & Attribute.Unique;
    name: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::faculty.faculty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiForumForum extends Schema.CollectionType {
  collectionName: 'forums';
  info: {
    description: '';
    displayName: 'Forum';
    pluralName: 'forums';
    singularName: 'forum';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    comments: Attribute.Relation<
      'api::forum.forum',
      'oneToMany',
      'api::comment.comment'
    >;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    content2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::forum.forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    department: Attribute.Relation<
      'api::forum.forum',
      'manyToOne',
      'api::department.department'
    >;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    headline: Attribute.String;
    publishedAt: Attribute.DateTime;
    signatures: Attribute.Relation<
      'api::forum.forum',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::forum.forum',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHuntClueHuntClue extends Schema.CollectionType {
  collectionName: 'hunt_clues';
  info: {
    description: '';
    displayName: 'Hunt Clue';
    pluralName: 'hunt-clues';
    singularName: 'hunt-clue';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clue: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    clue_code: Attribute.String;
    clue_number: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hunt-clue.hunt-clue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hint: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    hints_claimed_by: Attribute.Relation<
      'api::hunt-clue.hunt-clue',
      'manyToMany',
      'api::hunt-team.hunt-team'
    >;
    treasure_hunt: Attribute.Relation<
      'api::hunt-clue.hunt-clue',
      'manyToOne',
      'api::treasure-hunt.treasure-hunt'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::hunt-clue.hunt-clue',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHuntTeamHuntTeam extends Schema.CollectionType {
  collectionName: 'hunt_teams';
  info: {
    description: '';
    displayName: 'Hunt Team';
    pluralName: 'hunt-teams';
    singularName: 'hunt-team';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clues_solved: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hints_claimed: Attribute.Integer;
    hints_claimed_by: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    hints_claimed_for: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'manyToMany',
      'api::hunt-clue.hunt-clue'
    >;
    members: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    name: Attribute.String;
    treasure_hunt: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'manyToOne',
      'api::treasure-hunt.treasure-hunt'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::hunt-team.hunt-team',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIntercollegiateEventIntercollegiateEvent
  extends Schema.CollectionType {
  collectionName: 'intercollegiate_events';
  info: {
    description: '';
    displayName: 'Intercollegiate Event';
    pluralName: 'intercollegiate-events';
    singularName: 'intercollegiate-event';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    college_name: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::intercollegiate-event.intercollegiate-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    deadline: Attribute.DateTime;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    event_title: Attribute.String;
    event_type: Attribute.Enumeration<
      ['fest', 'single_event', 'seminar', 'conference']
    >;
    form_link: Attribute.String;
    from: Attribute.Date;
    image_url: Attribute.String &
      Attribute.DefaultTo<'https://img.freepik.com/premium-vector/poster-festival-celebration-holiday-party-group-people-happy-be-together-celebrating-special-event_1343-461.jpg?semt=ais_hybrid'>;
    publishedAt: Attribute.DateTime;
    short_description: Attribute.Text;
    tags: Attribute.String;
    to: Attribute.Date;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::intercollegiate-event.intercollegiate-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    website_link: Attribute.String;
  };
}

export interface ApiOrganisationOrganisation extends Schema.CollectionType {
  collectionName: 'organisations';
  info: {
    description: '';
    displayName: 'Organisation';
    pluralName: 'organisations';
    singularName: 'organisation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    circle1_humans: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    circle2_humans: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    induction: Attribute.Boolean;
    induction_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    induction_end: Attribute.DateTime;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    members: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    name: Attribute.String;
    profile: Attribute.Relation<
      'api::organisation.organisation',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    publishedAt: Attribute.DateTime;
    short_description: Attribute.Text;
    twitter: Attribute.String;
    type: Attribute.Enumeration<
      [
        'ministry',
        'club',
        'society',
        'fest',
        'collective',
        'iso',
        'league',
        'other'
      ]
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::organisation.organisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    website_blog: Attribute.String;
    whatsapp: Attribute.String;
    youtube: Attribute.String;
  };
}

export interface ApiPoolPool extends Schema.CollectionType {
  collectionName: 'pools';
  info: {
    description: '';
    displayName: 'Pool';
    pluralName: 'pools';
    singularName: 'pool';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::pool.pool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    day: Attribute.Date;
    journey: Attribute.Enumeration<
      [
        'airport to campus',
        'airport(T1) to campus',
        'airport(T2) to campus',
        'airport(T3) to campus',
        'campus to airport',
        'airport to jahangirpuri',
        'jahangirpuri to airport',
        'jahangirpuri to campus',
        'campus to jahangirpuri',
        'campus to new delhi',
        'new delhi to campus',
        'new delhi to jahangirpuri',
        'jahangirpuri to new delhi',
        'gurgaon to campus',
        'campus to gurgaon',
        'campus to chandigarh',
        'chandigarh to campus',
        'campus to jaipur',
        'jaipur to campus',
        'campus to ludhiana',
        'ludhiana to campus',
        'campus to noida',
        'noida to campus',
        'campus to ghaziabad',
        'ghaziabad to campus',
        'campus to nizamuddin',
        'nizamuddin to campus',
        'campus to agra',
        'agra to campus'
      ]
    >;
    pooler: Attribute.Relation<
      'api::pool.pool',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    status: Attribute.Enumeration<['available', 'canceled', 'pooled']>;
    time: Attribute.Time;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'api::pool.pool', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiResourceResource extends Schema.CollectionType {
  collectionName: 'resources';
  info: {
    displayName: 'Resource';
    pluralName: 'resources';
    singularName: 'resource';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::resource.resource',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    publishedAt: Attribute.DateTime;
    tags: Attribute.String;
    title: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::resource.resource',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    description: '';
    displayName: 'Review';
    pluralName: 'reviews';
    singularName: 'review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Attribute.Relation<
      'api::review.review',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    batch: Attribute.Enumeration<
      ['ASP23', 'ASP24', 'UG24', 'UG25', 'UG2023', 'UG2024', 'Other']
    >;
    course: Attribute.Relation<
      'api::review.review',
      'manyToOne',
      'api::course.course'
    >;
    cr: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    extracredit: Attribute.Boolean;
    fair: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    grade: Attribute.Enumeration<
      [
        'A/A-',
        'B+/B/B-',
        'C+/C/C-',
        'D+/D/D-',
        'F',
        'P',
        'have not received yet',
        'do not wish to reveal'
      ]
    >;
    grading_type: Attribute.Enumeration<['absolute', 'relative']>;
    lecturer: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    major: Attribute.String;
    mode: Attribute.Enumeration<['online', 'offline']>;
    overall: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    publishedAt: Attribute.DateTime;
    relatability: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    review: Attribute.Text;
    strict: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    tf: Attribute.Text;
    transparent: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    description: '';
    displayName: 'Service';
    pluralName: 'services';
    singularName: 'service';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    end: Attribute.Date;
    numberPeople: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 20;
          min: 1;
        },
        number
      >;
    service: Attribute.Enumeration<
      [
        'netflix',
        'prime',
        'chatgpt',
        'chegg',
        'spotify',
        'grammarly',
        'duolingo',
        'others'
      ]
    >;
    start: Attribute.Date;
    status: Attribute.Enumeration<['open', 'full', 'canceled']>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    user: Attribute.Relation<
      'api::service.service',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiSgMailSgMail extends Schema.CollectionType {
  collectionName: 'sg_mails';
  info: {
    description: '';
    displayName: 'SG Mail';
    pluralName: 'sg-mails';
    singularName: 'sg-mail';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    alias: Attribute.Enumeration<
      [
        'Inductions',
        'Lost and Found',
        'Jobs and Internships',
        'Surveys',
        'Campaigns',
        'Fundraisers',
        'Promotions',
        'Events and Invitations'
      ]
    >;
    approver: Attribute.Relation<
      'api::sg-mail.sg-mail',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    attachment_path: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sg-mail.sg-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    mail_body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    notes: Attribute.Text;
    recipients: Attribute.String;
    sender: Attribute.Relation<
      'api::sg-mail.sg-mail',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    status: Attribute.Enumeration<['pending', 'approved', 'rejected']>;
    subject: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::sg-mail.sg-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTicketTicket extends Schema.CollectionType {
  collectionName: 'tickets';
  info: {
    description: '';
    displayName: 'Ticket';
    pluralName: 'tickets';
    singularName: 'ticket';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    author: Attribute.Relation<
      'api::ticket.ticket',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    category: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    departments: Attribute.Relation<
      'api::ticket.ticket',
      'manyToMany',
      'api::department.department'
    >;
    details: Attribute.Component<'person.person'>;
    response: Attribute.Component<'response.response'>;
    status: Attribute.Enumeration<['pending', 'resolved']>;
    subcategory: Attribute.String;
    subject: Attribute.String;
    ticket: Attribute.Text;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::ticket.ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTreasureHuntTreasureHunt extends Schema.CollectionType {
  collectionName: 'treasure_hunts';
  info: {
    description: '';
    displayName: 'Treasure Hunt';
    pluralName: 'treasure-hunts';
    singularName: 'treasure-hunt';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::treasure-hunt.treasure-hunt',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    end_time: Attribute.DateTime;
    hunt_clues: Attribute.Relation<
      'api::treasure-hunt.treasure-hunt',
      'oneToMany',
      'api::hunt-clue.hunt-clue'
    >;
    hunt_teams: Attribute.Relation<
      'api::treasure-hunt.treasure-hunt',
      'oneToMany',
      'api::hunt-team.hunt-team'
    >;
    name: Attribute.String;
    organisers: Attribute.Relation<
      'api::treasure-hunt.treasure-hunt',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    start_time: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::treasure-hunt.treasure-hunt',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    approved_sg_mails: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::sg-mail.sg-mail'
    >;
    batch: Attribute.String;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    borrow_requests: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::borrow-request.borrow-request'
    >;
    cgpa_data: Attribute.JSON;
    comments: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::comment.comment'
    >;
    concentration: Attribute.String;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    department: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::department.department'
    >;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    events_calendar_filter_preferences: Attribute.JSON;
    floor: Attribute.Integer;
    forums: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::forum.forum'
    >;
    hunt_hints_claimed: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::hunt-team.hunt-team'
    >;
    hunt_team: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::hunt-team.hunt-team'
    >;
    issued_borrow_requests: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::borrow-request.borrow-request'
    >;
    major: Attribute.String;
    minor: Attribute.String;
    organisations: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::organisation.organisation'
    >;
    organisations_circle1_of: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::organisation.organisation'
    >;
    organisations_circle2_of: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::organisation.organisation'
    >;
    organisations_members_of: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::organisation.organisation'
    >;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    pf_credits: Attribute.Integer;
    phone: Attribute.String;
    pools: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::pool.pool'
    >;
    profile_url: Attribute.String;
    pronouns: Attribute.String;
    provider: Attribute.String;
    reason_blocked: Attribute.Text;
    resetPasswordToken: Attribute.String & Attribute.Private;
    returned_borrow_requests: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::borrow-request.borrow-request'
    >;
    reviews: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::review.review'
    >;
    RH: Attribute.String;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    services: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::service.service'
    >;
    sg_mails: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::sg-mail.sg-mail'
    >;
    tickets: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::ticket.ticket'
    >;
    treasure_hunt: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'api::treasure-hunt.treasure-hunt'
    >;
    type: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::announcement.announcement': ApiAnnouncementAnnouncement;
      'api::ashoka-department.ashoka-department': ApiAshokaDepartmentAshokaDepartment;
      'api::asset.asset': ApiAssetAsset;
      'api::borrow-request.borrow-request': ApiBorrowRequestBorrowRequest;
      'api::calendar-event.calendar-event': ApiCalendarEventCalendarEvent;
      'api::comment.comment': ApiCommentComment;
      'api::course-review.course-review': ApiCourseReviewCourseReview;
      'api::course.course': ApiCourseCourse;
      'api::department.department': ApiDepartmentDepartment;
      'api::faculty.faculty': ApiFacultyFaculty;
      'api::forum.forum': ApiForumForum;
      'api::hunt-clue.hunt-clue': ApiHuntClueHuntClue;
      'api::hunt-team.hunt-team': ApiHuntTeamHuntTeam;
      'api::intercollegiate-event.intercollegiate-event': ApiIntercollegiateEventIntercollegiateEvent;
      'api::organisation.organisation': ApiOrganisationOrganisation;
      'api::pool.pool': ApiPoolPool;
      'api::resource.resource': ApiResourceResource;
      'api::review.review': ApiReviewReview;
      'api::service.service': ApiServiceService;
      'api::sg-mail.sg-mail': ApiSgMailSgMail;
      'api::ticket.ticket': ApiTicketTicket;
      'api::treasure-hunt.treasure-hunt': ApiTreasureHuntTreasureHunt;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
