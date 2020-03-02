import CronJobDetails from '../components/resources/workloads/cronJobs/CronJobDetails';
import DaemonSetDetails from '../components/resources/workloads/daemonSets/DaemonSetDetails';
import DeploymentDetails from '../components/resources/workloads/deployments/DeploymentDetails';
import JobDetails from '../components/resources/workloads/jobs/JobDetails';
import PodDetails from '../components/resources/workloads/pods/PodDetails';
import ReplicaSetDetails from '../components/resources/workloads/replicaSets/ReplicaSetDetails';
import ReplicationControllerDetails from '../components/resources/workloads/replicationControllers/ReplicationControllerDetails';
import StatefulSetDetails from '../components/resources/workloads/statefulSets/StatefulSetDetails';

import IngressDetails from '../components/resources/discoveryAndLoadbalancing/ingresses/IngressDetails';
import ServiceDetails from '../components/resources/discoveryAndLoadbalancing/services/ServiceDetails';

import ConfigMapDetails from '../components/resources/configAndStorage/configMaps/ConfigMapDetails';
import PersistentVolumeClaimDetails from '../components/resources/configAndStorage/persistentVolumeClaims/PersistentVolumeClaimDetails';
import PersistentVolumeDetails
  from '../components/resources/configAndStorage/persistentVolumes/PersistentVolumeDetails';
import SecretDetails from '../components/resources/configAndStorage/secrets/SecretDetails';
import ServiceAccountDetails from '../components/resources/configAndStorage/serviceAccounts/ServiceAccountDetails';

import ClusterRoleBindingDetails from '../components/resources/rbac/clusterRoleBindings/ClusterRoleBindingDetails';
import ClusterRoleDetails from '../components/resources/rbac/clusterRoles/ClusterRoleDetails';
import RoleBindingDetails from '../components/resources/rbac/roleBindings/RoleBindingDetails';
import RoleDetails from '../components/resources/rbac/roles/RoleDetails';

import EventDetails from '../components/resources/cluster/events/EventDetails';
import NamespaceDetails from '../components/resources/cluster/namespaces/NamespaceDetails';
import NodeDetails from '../components/resources/cluster/nodes/NodeDetails';

import CronJobItem from '../components/resources/workloads/cronJobs/CronJobItem';
import DaemonSetItem from '../components/resources/workloads/daemonSets/DaemonSetItem';
import DeploymentItem from '../components/resources/workloads/deployments/DeploymentItem';
import JobItem from '../components/resources/workloads/jobs/JobItem';
import PodItem from '../components/resources/workloads/pods/PodItem';
import ReplicaSetItem from '../components/resources/workloads/replicaSets/ReplicaSetItem';
import ReplicationControllerItem from '../components/resources/workloads/replicationControllers/ReplicationControllerItem';
import StatefulSetItem from '../components/resources/workloads/statefulSets/StatefulSetItem';

import IngressItem from '../components/resources/discoveryAndLoadbalancing/ingresses/IngressItem';
import ServiceItem from '../components/resources/discoveryAndLoadbalancing/services/ServiceItem';

import ConfigMapItem from '../components/resources/configAndStorage/configMaps/ConfigMapItem';
import PersistentVolumeClaimItem from '../components/resources/configAndStorage/persistentVolumeClaims/PersistentVolumeClaimItem';
import PersistentVolumeItem from '../components/resources/configAndStorage/persistentVolumes/PersistentVolumeItem';
import SecretItem from '../components/resources/configAndStorage/secrets/SecretItem';
import ServiceAccountItem from '../components/resources/configAndStorage/serviceAccounts/ServiceAccountItem';

import ClusterRoleBindingItem from '../components/resources/rbac/clusterRoleBindings/ClusterRoleBindingItem';
import ClusterRoleItem from '../components/resources/rbac/clusterRoles/ClusterRoleItem';
import RoleBindingItem from '../components/resources/rbac/roleBindings/RoleBindingItem';
import RoleItem from '../components/resources/rbac/roles/RoleItem';

import CustomResourceDefinitionItem from '../components/resources/cluster/customResourceDefinitions/CustomResourceDefinitionItem';
import EventItem from '../components/resources/cluster/events/EventItem';
import NamespaceItem from '../components/resources/cluster/namespaces/NamespaceItem';
import NodeItem from '../components/resources/cluster/nodes/NodeItem';

import { IAppSections } from '../declarations';

export const resources: IAppSections = {
  'workloads': {
    title: 'Workloads',
    pages: {
      'cronjobs': {
        singleText: 'Cron Job',
        pluralText: 'Cron Jobs',
        icon: '/assets/icons/kubernetes/cronjob.png',
        listURL: (namespace: string) => { return namespace ? `/apis/batch/v1beta1/namespaces/${namespace}/cronjobs` : `/apis/batch/v1beta1/cronjobs`; },
        listItemComponent: CronJobItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/batch/v1beta1/namespaces/${namespace}/cronjobs/${name}`; },
        detailsComponent: CronJobDetails,
      },
      'daemonsets': {
        singleText: 'Daemon Set',
        pluralText: 'Daemon Sets',
        icon: '/assets/icons/kubernetes/ds.png',
        listURL: (namespace: string) => { return namespace ? `/apis/apps/v1/namespaces/${namespace}/daemonsets` : `/apis/apps/v1/daemonsets`; },
        listItemComponent: DaemonSetItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/apps/v1/namespaces/${namespace}/daemonsets/${name}`; },
        detailsComponent: DaemonSetDetails,
      },
      'deployments': {
        singleText: 'Deployment',
        pluralText: 'Deployments',
        icon: '/assets/icons/kubernetes/deploy.png',
        listURL: (namespace: string) => { return namespace ? `/apis/apps/v1/namespaces/${namespace}/deployments` : `/apis/apps/v1/deployments`; },
        listItemComponent: DeploymentItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/apps/v1/namespaces/${namespace}/deployments/${name}`; },
        detailsComponent: DeploymentDetails,
      },
      'jobs': {
        singleText: 'Job',
        pluralText: 'Jobs',
        icon: '/assets/icons/kubernetes/job.png',
        listURL: (namespace: string) => { return namespace ? `/apis/batch/v1/namespaces/${namespace}/jobs` : `/apis/batch/v1/jobs`; },
        listItemComponent: JobItem,
        detailsURL: (namespace: string, name: string) => {
          return `/apis/batch/v1/namespaces/${namespace}/jobs/${name}`;
        },
        detailsComponent: JobDetails,
      },
      'pods': {
        singleText: 'Pod',
        pluralText: 'Pods',
        icon: '/assets/icons/kubernetes/pod.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/pods` : `/api/v1/pods`; },
        listItemComponent: PodItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/pods/${name}`; },
        detailsComponent: PodDetails,
      },
      'replicasets': {
        singleText: 'Replica Set',
        pluralText: 'Replica Sets',
        icon: '/assets/icons/kubernetes/rs.png',
        listURL: (namespace: string) => { return namespace ? `/apis/apps/v1/namespaces/${namespace}/replicasets` : `/apis/apps/v1/replicasets`; },
        listItemComponent: ReplicaSetItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/apps/v1/namespaces/${namespace}/replicasets/${name}`; },
        detailsComponent: ReplicaSetDetails,
      },
      'replicationcontrollers': {
        singleText: 'Replication Controller',
        pluralText: 'Replication Controllers',
        icon: '/assets/icons/kubernetes/deploy.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/replicationcontrollers` : `/api/v1/replicationcontrollers`; },
        listItemComponent: ReplicationControllerItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/replicationcontrollers/${name}`; },
        detailsComponent: ReplicationControllerDetails,
      },
      'statefulsets': {
        singleText: 'Stateful Set',
        pluralText: 'Stateful Sets',
        icon: '/assets/icons/kubernetes/sts.png',
        listURL: (namespace: string) => { return namespace ? `/apis/apps/v1/namespaces/${namespace}/statefulsets` : `/apis/apps/v1/statefulsets`; },
        listItemComponent: StatefulSetItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/apps/v1/namespaces/${namespace}/statefulsets/${name}`; },
        detailsComponent: StatefulSetDetails,
      },
    },
  },
  'discovery-and-loadbalancing': {
    title: 'Discovery and Load Balancing',
    pages: {
      'ingresses': {
        singleText: 'Ingresse',
        pluralText: 'Ingresses',
        icon: '/assets/icons/kubernetes/ing.png',
        listURL: (namespace: string) => { return namespace ? `/apis/networking.k8s.io/v1beta1/namespaces/${namespace}/ingresses` : `/apis/networking.k8s.io/v1beta1/ingresses`; },
        listItemComponent: IngressItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/networking.k8s.io/v1beta1/namespaces/${namespace}/ingresses/${name}`; },
        detailsComponent: IngressDetails,
      },
      'services': {
        singleText: 'Service',
        pluralText: 'Services',
        icon: '/assets/icons/kubernetes/svc.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/services` : `/api/v1/services`; },
        listItemComponent: ServiceItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/services/${name}`; },
        detailsComponent: ServiceDetails,
      },
    }
  },
  'config-and-storage': {
    title: 'Config and Storage',
    pages: {
      'configmaps': {
        singleText: 'Config Map',
        pluralText: 'Config Maps',
        icon: '/assets/icons/kubernetes/cm.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/configmaps` : `/api/v1/configmaps`; },
        listItemComponent: ConfigMapItem,
        detailsURL: (namespace: string, name: string) => {
          return `/api/v1/namespaces/${namespace}/configmaps/${name}`;
        },
        detailsComponent: ConfigMapDetails,
      },
      'persistentvolumes': {
        singleText: 'Persistent Volume',
        pluralText: 'Persistent Volumes',
        icon: '/assets/icons/kubernetes/pv.png',
        listURL: (namespace: string) => { return `/api/v1/persistentvolumes`; },
        listItemComponent: PersistentVolumeItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/persistentvolumes/${name}`; },
        detailsComponent: PersistentVolumeDetails,
      },
      'persistentvolumeclaims': {
        singleText: 'Persistent Volume Claim',
        pluralText: 'Persistent Volume Claims',
        icon: '/assets/icons/kubernetes/pvc.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/persistentvolumeclaims` : `/api/v1/persistentvolumeclaims`; },
        listItemComponent: PersistentVolumeClaimItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/persistentvolumeclaims/${name}`; },
        detailsComponent: PersistentVolumeClaimDetails,
      },
      'secrets': {
        singleText: 'Secret',
        pluralText: 'Secrets',
        icon: '/assets/icons/kubernetes/secret.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/secrets` : `/api/v1/secrets`; },
        listItemComponent: SecretItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/secrets/${name}`; },
        detailsComponent: SecretDetails,
      },
      'serviceaccounts': {
        singleText: 'Service Account',
        pluralText: 'Service Accounts',
        icon: '/assets/icons/kubernetes/sa.png',
        listURL: (namespace: string) => { return namespace ? `/api/v1/namespaces/${namespace}/serviceaccounts` : `/api/v1/serviceaccounts`; },
        listItemComponent: ServiceAccountItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/serviceaccounts/${name}`; },
        detailsComponent: ServiceAccountDetails,
      },
    }
  },
  'rbac': {
    title: 'RBAC',
    pages: {
      'clusterroles': {
        singleText: 'Cluster Role',
        pluralText: 'Cluster Roles',
        icon: '/assets/icons/kubernetes/c-role.png',
        listURL: (namespace: string) => { return `/apis/rbac.authorization.k8s.io/v1/clusterroles`; },
        listItemComponent: ClusterRoleItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/rbac.authorization.k8s.io/v1/clusterroles/${name}`; },
        detailsComponent: ClusterRoleDetails,
      },
      'clusterrolebindings': {
        singleText: 'Cluster Role Binding',
        pluralText: 'Cluster Role Bindings',
        icon: '/assets/icons/kubernetes/c-rb.png',
        listURL: (namespace: string) => { return `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`; },
        listItemComponent: ClusterRoleBindingItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${name}`; },
        detailsComponent: ClusterRoleBindingDetails,
      },
      'roles': {
        singleText: 'Role',
        pluralText: 'Roles',
        icon: '/assets/icons/kubernetes/role.png',
        listURL: (namespace: string) => { return namespace ? `/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/roles` : `/apis/rbac.authorization.k8s.io/v1/roles`; },
        listItemComponent: RoleItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/roles/${name}`; },
        detailsComponent: RoleDetails,
      },
      'rolebindings': {
        singleText: 'Role Binding',
        pluralText: 'Role Bindings',
        icon: '/assets/icons/kubernetes/rb.png',
        listURL: (namespace: string) => { return namespace ? `/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/rolebindings` : `/apis/rbac.authorization.k8s.io/v1/rolebindings`; },
        listItemComponent: RoleBindingItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/rbac.authorization.k8s.io/v1/namespaces/${namespace}/rolebindings/${name}`; },
        detailsComponent: RoleBindingDetails,
      },
    }
  },
  'cluster': {
    title: 'Cluster',
    pages: {
      'customresourcedefinitions': {
        singleText: 'Custom Resource Definition',
        pluralText: 'Custom Resource Definitions',
        icon: '/assets/icons/kubernetes/crd.png',
        listURL: (namespace: string) => { return `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions`; },
        listItemComponent: CustomResourceDefinitionItem,
        detailsURL: (namespace: string, name: string) => { return `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions`; },
        detailsComponent: CustomResourceDefinitionItem,
      },
      'events': {
        singleText: 'Event',
        pluralText: 'Events',
        icon: '/assets/icons/kubernetes/events.png',
        listURL: (namespace: string) => {
          return namespace ? `/api/v1/namespaces/${namespace}/events` : `/api/v1/events`;
        },
        listItemComponent: EventItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${namespace}/events/${name}`; },
        detailsComponent: EventDetails,
      },
      'namespaces': {
        singleText: 'Namespace',
        pluralText: 'Namespaces',
        icon: '/assets/icons/kubernetes/ns.png',
        listURL: (namespace: string) => { return `/api/v1/namespaces`; },
        listItemComponent: NamespaceItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/namespaces/${name}`; },
        detailsComponent: NamespaceDetails,
      },
      'nodes': {
        singleText: 'Node',
        pluralText: 'Nodes',
        icon: '/assets/icons/kubernetes/node.png',
        listURL: (namespace: string) => { return `/api/v1/nodes`; },
        listItemComponent: NodeItem,
        detailsURL: (namespace: string, name: string) => { return `/api/v1/nodes/${name}`; },
        detailsComponent: NodeDetails,
      },
    }
  },
};