[![StepSecurity Maintained Action](https://raw.githubusercontent.com/step-security/maintained-actions-assets/main/assets/maintained-action-banner.png)](https://docs.stepsecurity.io/actions/stepsecurity-maintained-actions)

[![Release](https://img.shields.io/github/v/release/step-security/kubevious-cli-action?label=version&color=2ec4b6)](https://github.com/step-security/kubevious-cli-action/releases)
[![License](https://img.shields.io/badge/License-Apache%202.0-cb997e.svg)](https://opensource.org/licenses/Apache-2.0)

# Kubevious CLI Action
**Kubevious CLI** is an app-centric assurance and validation tool for Kubernetes. It detects and prevents errors (*typos, misconfigurations, conflicts, inconsistencies*) and violations of best practices by validating changes before they reach the clusters.

## Usage

```yaml
- name: Kubevious Validation
  uses: step-security/kubevious-cli-action@v1
  with:
    manifests: path/to/manifests
```

## Inputs

| Input                  | Description                                              | Default  |
| ---------------------- | -------------------------------------------------------- | -------- |
| `manifests`            | Path to manifest files, directories, or URLs to validate | `''`     |
| `helm_repo_url`        | Helm repository URL                                      | `''`     |
| `helm_repo_name`       | Name alias for Helm repository URL                       | `''`     |
| `helm_chart`           | Helm chart name                                          | `''`     |
| `helm_namespace`       | Helm release namespace                                   | `''`     |
| `helm_include_crds`    | Include CRDs in Helm release                             | `false`  |
| `helm_override`        | Helm overrides                                           | `''`     |
| `crds`                 | Path to CRDs to include in validation                    | `''`     |
| `mocks`                | Path to mocked manifests to include in validation        | `''`     |
| `k8s_version`          | Kubernetes version to validate against                   | `''`     |
| `live_k8s`             | Validate against live Kubernetes cluster                 | `false`  |
| `ignore_unknown`       | Ignore unknown Kubernetes resources                      | `false`  |
| `ignore_non_k8s`       | Ignore non-Kubernetes YAML files                         | `false`  |
| `skip_rules`           | Skip rules by name                                       | `''`     |
| `only_rules`           | Run only specified rules                                 | `''`     |
| `skip_rule_categories` | Skip rules by category                                   | `''`     |
| `only_rule_categories` | Run only specified rule categories                       | `''`     |
| `detailed_output`      | Output in detail                                         | `false`  |
| `json_output`          | Output in JSON format                                    | `false`  |
| `other_args`           | Additional arguments                                     | `''`     |

## Examples

### Validate manifest files
```yaml
- uses: step-security/kubevious-cli-action@v1
  with:
    manifests: path/to/manifests
```

### Validate a Helm chart
```yaml
- uses: step-security/kubevious-cli-action@v1
  with:
    helm_repo_url: https://helm.traefik.io/traefik
    helm_repo_name: traefik
    helm_chart: traefik
    helm_namespace: traefik
    helm_include_crds: true
```

### Validate Kustomize output
```yaml
- name: Kustomize build
  run: kustomize build path/to/overlay > manifests.yaml
- uses: step-security/kubevious-cli-action@v1
  with:
    manifests: manifests.yaml
```

### Validate against a specific K8s version
```yaml
- uses: step-security/kubevious-cli-action@v1
  with:
    manifests: path/to/manifests
    k8s_version: '1.30'
```

## 📜 License
Kubevious CLI Action is an open-source project licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).
